import { ImageResponse } from "next/og";

import { profile } from "@/lib/data";

export const alt = `${profile.fullName} — Backend Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The preview card shown when the site is shared on LinkedIn, WhatsApp, Slack, X…
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(124,108,255,0.35), transparent 55%)",
          color: "#fafafa",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#a3a3ff" }}>$ whoami</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 84, fontWeight: 700, fontFamily: "sans-serif" }}>
            {profile.fullName}
          </div>
          <div style={{ fontSize: 40, color: "#a3a3ff", fontFamily: "sans-serif" }}>
            Backend Software Engineer · Go & Java
          </div>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 26, color: "#a3a3a3" }}>
          <span>Distributed systems</span>
          <span>Event-driven microservices</span>
          <span>1M+ records &lt;200 ms</span>
        </div>
      </div>
    ),
    size,
  );
}
