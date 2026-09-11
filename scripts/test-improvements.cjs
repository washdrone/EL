const ts = require("typescript");
const vm = require("node:vm");
const fs = require("node:fs");
const assert = require("node:assert/strict");
function load(file, imports = {}) {
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(
    code,
    {
      module,
      exports: module.exports,
      require: (name) => {
        if (!(name in imports))
          throw new Error(`Unexpected dependency: ${name}`);
        return imports[name];
      },
      console: { error() {} },
      process: { env: { NODE_ENV: "test" } },
    },
    { filename: file },
  );
  return module.exports;
}
(async () => {
  const { calculateInspectionCosts } = load("src/lib/inspection-cost.ts");
  const input = {
    distance: 100,
    frequency: 2,
    current: 1000,
    drone: 1200,
    currentFixed: 10000,
    droneFixed: 5000,
  };
  assert.equal(calculateInspectionCosts(input).difference, -30000);
  assert.equal(
    calculateInspectionCosts({ ...input, drone: 500 }).difference,
    110000,
  );
  for (const invalid of [
    { frequency: -1 },
    { frequency: 1.5 },
    { distance: 0 },
    { drone: NaN },
    { current: Infinity },
    { distance: Number.MAX_VALUE },
  ])
    assert.equal(calculateInspectionCosts({ ...input, ...invalid }), null);
  assert.equal(
    calculateInspectionCosts({
      ...input,
      current: 0,
      drone: 0,
      currentFixed: 0,
      droneFixed: 0,
    }).difference,
    0,
  );
  const options = load("src/lib/lead-options.ts");
  for (const key of Object.keys(options.inspectionLabels))
    assert.equal(options.validInspection(key), key);
  for (const key of [
    "__proto__",
    "constructor",
    "unexpected",
    ["termografi"],
    null,
  ])
    assert.equal(options.validInspection(key), "");
  let sent = 0,
    last;
  let deliveryOK = true;
  const { POST } = load("src/app/api/lead/route.ts", {
    "next/server": {
      NextResponse: {
        json: (body, init = {}) => ({ status: init.status ?? 200, body }),
      },
    },
    "@/lib/constants": {
      CONTACT_EMAIL: "test@example.invalid",
      COMPANY_NAME: "GridDrone",
    },
    "@/lib/lead-options": options,
    "@/lib/mailer": {
      sendLeadMail: async (data) => {
        sent++;
        last = data;
        return { ok: deliveryOK, notConfigured: !deliveryOK };
      },
    },
  });
  const base = {
    company: " Test AB ",
    contact: " Testperson ",
    email: "test@example.invalid",
    inspectionType: "termografi",
  };
  for (const body of [
    null,
    [],
    { ...base, company: 42 },
    { ...base, company: " " },
    { ...base, email: "nope" },
    { ...base, inspectionType: "constructor" },
    { ...base, timeframe: "bad" },
    { ...base, company: "A\r\nB" },
    { ...base, message: "x".repeat(6000) },
  ])
    assert.equal((await POST({ json: async () => body })).status, 400);
  assert.equal(
    (
      await POST({
        json: async () => {
          throw new Error("bad json");
        },
      })
    ).status,
    400,
  );
  assert.equal(sent, 0);
  assert.equal(
    (await POST({ json: async () => ({ ...base, website: "spam" }) })).status,
    200,
  );
  assert.equal(sent, 0);
  assert.equal(
    (
      await POST({
        json: async () => ({ ...base, message: "<script>test</script>" }),
      })
    ).status,
    200,
  );
  assert.equal(last.data.company, "Test AB");
  assert.ok(last.html.includes("&lt;script&gt;"));
  assert.ok(!last.html.includes("<script>"));
  deliveryOK = false;
  assert.equal((await POST({ json: async () => base })).status, 502);
  console.log(
    "PASS: calculation boundaries, service whitelist, malformed requests, honeypot, escaping, trimmed fields, successful and failed delivery (mailer mocked; no email sent).",
  );
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
