import { ImageResponse } from "next/og";

export const alt = "Agentic | Clay-Powered GTM Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #09090B 0%, #18181B 50%, #09090B 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#A78BFA",
            letterSpacing: "0.05em",
            marginBottom: 24,
          }}
        >
          AGENTIC
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#FAFAFA",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.1,
          }}
        >
          Clay-Powered GTM Automation
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#A1A1AA",
            marginTop: 24,
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Signals-based outbound systems that generate qualified pipeline.
        </div>
      </div>
    ),
    { ...size }
  );
}
