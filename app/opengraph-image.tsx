import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Haythem Adnani — Cybersecurity & AI Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "1200px", height: "630px", background: "#0d0f14", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", fontFamily: "sans-serif", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-140px", right: "-80px", width: "520px", height: "520px", borderRadius: "50%", background: "rgba(105,183,255,0.14)", display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", border: "1px solid rgba(105,183,255,0.28)", borderRadius: "999px", padding: "9px 18px", alignSelf: "flex-start", color: "#94b8d4", fontSize: "18px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#69b7ff", display: "flex" }} />
            Cybersecurity · AI · Software Engineering
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.95 }}>
            <span style={{ fontSize: "82px", fontWeight: 700, color: "#f1f5f9" }}>Haythem</span>
            <span style={{ fontSize: "82px", fontWeight: 700, color: "#69b7ff" }}>Adnani</span>
          </div>
          <span style={{ fontSize: "28px", color: "#94a3b8" }}>Computer Science Engineering Student · ENIT</span>
        </div>

        <div style={{ display: "flex", gap: "12px", zIndex: 1 }}>
          {["AI Security", "Security Automation", "Machine Learning", "RAG"].map((skill) => (
            <span key={skill} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: "8px", padding: "9px 16px", color: "#cbd5e1", fontSize: "18px", fontFamily: "monospace", display: "flex" }}>{skill}</span>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
