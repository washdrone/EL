import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
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
          padding: "64px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#91feea",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            alignSelf: "flex-start",
          }}
        >
          GridDrone
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              margin: 0,
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 800,
              maxWidth: "980px",
            }}
          >
            Drönarinspektion av elnät & kraftledningar
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 32,
              lineHeight: 1.25,
              color: "rgba(255,255,255,0.88)",
              maxWidth: "980px",
            }}
          >
            Kraftledningar, elnät & energiinfrastruktur — hela Sverige.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "rgba(255,255,255,0.82)",
            fontSize: 24,
          }}
        >
          <span>BVLOS-certifierat</span>
          <span>•</span>
          <span>Termografi & LiDAR</span>
          <span>•</span>
          <span>GIS-redo leveranser</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
