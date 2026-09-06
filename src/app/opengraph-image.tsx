import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Required so the route can be emitted by `output: export`.
export const dynamic = "force-static";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#050407",
          padding: "72px",
          color: "#f4f2ef",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              backgroundColor: "#b982ff",
            }}
          />
          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#827d8c",
            }}
          >
            {site.location}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 190,
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 0.86,
              textTransform: "uppercase",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 34,
              fontSize: 26,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#b9b5bf",
            }}
          >
            {site.roleList.join("  /  ")}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 28,
            fontSize: 22,
            color: "#827d8c",
          }}
        >
          <div style={{ maxWidth: 780 }}>{site.statement}</div>
        </div>
      </div>
    ),
    size,
  );
}
