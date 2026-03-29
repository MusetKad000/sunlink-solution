"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "GoodLeap",            logo: "/logos/goodleap.svg",  isIcon: true  },
  { name: "Palmetto LightReach", logo: "/logos/palmetto.svg",  isIcon: true  },
  { name: "Sunrun",              logo: "/logos/sunrun.png",    isIcon: false },
  { name: "Tesla",               logo: "/logos/tesla.svg",     isIcon: false },
  { name: "Enfin",               logo: "/logos/enfin.png",     isIcon: false },
];

export default function Partners() {
  return (
    <section style={{ padding: "56px 24px", background: "transparent", position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: 28,
          }}
        >
          Trusted Partners &amp; Financing
        </motion.p>

        <div style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "12px 28px",
                minWidth: 140,
                flex: "1 1 140px",
                maxWidth: 200,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.logo}
                alt={p.name}
                style={{
                  height: p.isIcon ? 52 : 48,
                  width: p.isIcon ? 52 : "auto",
                  maxWidth: p.isIcon ? 52 : 140,
                  objectFit: "contain",
                  display: "block",
                  borderRadius: p.isIcon ? 12 : 0,
                }}
              />
              <span style={{
                fontSize: 13,
                fontWeight: 600,
                color: "rgba(255,255,255,0.6)",
                fontFamily: "Inter, sans-serif",
                letterSpacing: "0.2px",
              }}>
                {p.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
