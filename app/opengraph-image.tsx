import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "WDGLOW Christmas light installation in Westerly, Rhode Island and Connecticut";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#10241c",
          color: "#f4efe6",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", color: "#e7d3a4", fontSize: 24, letterSpacing: 6 }}>
          <span>WDGLOW</span>
          <span>WESTERLY, RHODE ISLAND</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 920 }}>
          <div style={{ fontSize: 76, lineHeight: 0.95, letterSpacing: -2 }}>
            Christmas lights, installed and taken down.
          </div>
          <div style={{ fontSize: 28, color: "#d9d0c3" }}>
            Homes and businesses across Rhode Island and Connecticut.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
