"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      className="px-6 md:px-12 py-8 flex items-center justify-between text-xs border-t border-white/5 max-w-5xl mx-auto"
      style={{ color: "var(--text-muted)" }}
    >
      <span>Marilia Gomes © {new Date().getFullYear()}</span>
      <span>
        {t("built")} <span style={{ color: "var(--accent)" }}>♥</span>
      </span>
    </footer>
  );
}
