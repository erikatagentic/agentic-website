import { ImageResponse } from "next/og";
import { BRAND_COLORS, SITE_CONFIG } from "@/lib/constants";

export const alt = "Agentic | Clay-Powered GTM Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(135deg, ${BRAND_COLORS.background} 0%, ${BRAND_COLORS.backgroundAlt} 50%, ${BRAND_COLORS.background} 100%)`,
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
            background: `radial-gradient(circle, ${BRAND_COLORS.primaryGlow} 0%, transparent 70%)`,
          }}
        />
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: BRAND_COLORS.primaryText,
            letterSpacing: "0.05em",
            marginBottom: 24,
          }}
        >
          {SITE_CONFIG.name.toUpperCase()}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: BRAND_COLORS.foreground,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.1,
          }}
        >
          {SITE_CONFIG.tagline}
        </div>
        <div
          style={{
            fontSize: 24,
            color: BRAND_COLORS.foregroundMuted,
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
