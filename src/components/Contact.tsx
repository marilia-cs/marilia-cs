"use client";

import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="mb-12">
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
          03
        </p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3">
          {t("title")}
        </h2>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          {t("subtitle")}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={`mailto:${t("email")}`}
          className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/5 transition-all duration-200 group hover:border-white/[0.12] hover:-translate-y-0.5"
          style={{ background: "var(--surface)" }}
        >
          <span className="text-lg" style={{ color: "var(--accent)" }}>✉</span>
          <div>
            <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--text-muted)" }}>Email</p>
            <p className="text-sm font-medium">{t("email")}</p>
          </div>
        </a>
        <a
          href={`https://${t("linkedin")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/5 transition-all duration-200 group hover:border-white/[0.12] hover:-translate-y-0.5"
          style={{ background: "var(--surface)" }}
        >
          <span className="text-lg" style={{ color: "var(--accent)" }}>in</span>
          <div>
            <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--text-muted)" }}>LinkedIn</p>
            <p className="text-sm font-medium">{t("linkedin")}</p>
          </div>
        </a>
      </div>
    </section>
  );
}
