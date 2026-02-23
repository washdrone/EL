import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0b1525 0%, #072849 45%, #0159a0 100%)",
          color: "white",
          padding: "56px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            color: "#91feea",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          SkyGrid
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <h1
            style={{
              margin: 0,
              fontSize: 62,
              lineHeight: 1.08,
              fontWeight: 800,
              maxWidth: "920px",
            }}
          >
            Elnätsinspektion med drönare
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 28,
              lineHeight: 1.25,
              color: "rgba(255,255,255,0.88)",
              maxWidth: "920px",
            }}
          >
            Luftledningar, dataleveranser och kvalitetssäkrad metodik.
          </p>
        </div>

        <div
          style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: 22,
          }}
        >
          SkyGrid
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
