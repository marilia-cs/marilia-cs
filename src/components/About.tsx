"use client";

import { useTranslations } from "next-intl";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export default function About() {
  const t = useTranslations("about");
  const experience = t.raw("experience") as ExperienceItem[];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="mb-16">
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
          01
        </p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-10">
          {t("title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {t("bio_1")}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {t("bio_2")}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-sm tracking-widest uppercase mb-8" style={{ color: "var(--text-muted)" }}>
          {t("experience_title")}
        </h3>
        <div className="space-y-0">
          {experience.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-7 border-t border-white/5 group transition-colors hover:border-white/10 -mx-4 px-4 rounded-lg hover:bg-white/[0.02]"
            >
              <div>
                <p className="text-sm font-medium mb-1">{item.company}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{item.period}</p>
              </div>
              <div>
                <p className="text-base font-medium mb-2 group-hover:transition-colors" style={{ color: "var(--text-primary)" }}>
                  {item.role}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-white/5" />
        </div>
      </div>
    </section>
  );
}
