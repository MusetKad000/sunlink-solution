"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const items = [
  "500+ Systems Installed",
  "94% Permit Approval Rate",
  "California Based & Operated",
  "25-Year Workmanship Warranty",
];

export default function SocialProofBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      style={{
        borderTop: "1px solid rgba(0,102,255,0.12)",
        borderBottom: "1px solid rgba(0,102,255,0.12)",
        background: "rgba(0,20,60,0.08)",
        backdropFilter: "blur(10px)",
        padding: "20px 24px",
      }}
    >
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        flexWrap: "wrap",
      }}>
        {items.map((item, i) => (
          <div key={item} style={{ display: "flex", alignItems: "center" }}>
            {i > 0 && (
              <span style={{
                width: 1,
                height: 20,
                background: "rgba(0,170,255,0.15)",
                margin: "0 28px",
                display: "block",
                flexShrink: 0,
              }} />
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <CheckCircle size={14} color="#0066ff" style={{ flexShrink: 0 }} />
              <span style={{
                fontSize: 13,
                fontWeight: 500,
                color: "rgba(255,255,255,0.6)",
                whiteSpace: "nowrap",
              }}>
                {item}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
