"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Hero() {
  const t = useTranslations("hero");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center max-w-3xl mx-auto">
      <div className="pt-24 pb-16 flex flex-col items-center gap-8">

        {/* Foto */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-1 ring-white/10">
          <Image
            src="/marilia.png"
            alt="Marilia Gomes"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col items-center">
          <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
            {t("role")}
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 leading-none">
            <span className="gradient-accent font-semibold">{t("title")}</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
            {t("bio")}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 rounded-lg text-sm font-medium transition-all hover:opacity-90 cursor-pointer"
              style={{ background: "var(--accent)", color: "var(--background)" }}
            >
              {t("cta_projects")}
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="px-6 py-3 rounded-lg text-sm font-medium border border-white/10 transition-all hover:border-white/20 hover:text-white cursor-pointer"
              style={{ color: "var(--text-secondary)" }}
            >
              {t("cta_about")}
            </button>
            <a
              href="https://www.linkedin.com/in/mariliagomes-/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-lg border border-white/10 transition-all hover:border-white/25 hover:text-white"
              style={{ color: "var(--text-secondary)" }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

      </div>

      <div className="flex items-center gap-3 pb-12" style={{ color: "var(--text-muted)" }}>
        <div className="h-px w-8" style={{ background: "var(--text-muted)" }} />
        <span className="text-xs tracking-widest uppercase">scroll</span>
      </div>
    </section>
  );
}
