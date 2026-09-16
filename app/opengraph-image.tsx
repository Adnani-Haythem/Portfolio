import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Haythem Adnani — Cybersecurity & AI Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#0d0f14",
          color: "#f1f5f9",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 430,
              padding: "9px 18px",
              border: "1px solid rgba(105,183,255,0.28)",
              borderRadius: 999,
              color: "#69b7ff",
              fontSize: 20,
            }}
          >
            Cybersecurity · AI · Software Engineering
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 24 }}>
            <div style={{ display: "flex", fontSize: 82, fontWeight: 700 }}>Haythem</div>
            <div style={{ display: "flex", fontSize: 82, fontWeight: 700, color: "#69b7ff" }}>Adnani</div>
          </div>

          <div style={{ display: "flex", marginTop: 18, fontSize: 28, color: "#94a3b8" }}>
            Computer Science Engineering Student · ENIT
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {[
            "AI Security",
            "Security Automation",
            "Machine Learning",
            "RAG",
          ].map((skill) => (
            <div
              key={skill}
              style={{
                display: "flex",
                padding: "9px 16px",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 8,
                color: "#cbd5e1",
                fontSize: 18,
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
