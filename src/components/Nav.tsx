"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const otherLocale = locale === "pt" ? "en" : "pt";
  const otherLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 backdrop-blur-md border-b border-white/5"
      style={{ background: "rgba(7, 9, 15, 0.75)" }}>
      <Link href={`/${locale}`} className="text-base font-medium opacity-70 hover:opacity-100 transition-opacity">
        Marília Gomes
      </Link>

      <div className="flex items-center gap-6 text-base">
        <button
          onClick={() => scrollTo("about")}
          className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        >
          {t("about")}
        </button>
        <button
          onClick={() => scrollTo("projects")}
          className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        >
          {t("projects")}
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        >
          {t("contact")}
        </button>
        <Link
          href={otherLocalePath}
          className="text-xs tracking-widest uppercase px-2 py-1 rounded border transition-all"
          style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
        >
          {t("language")}
        </Link>
      </div>
    </nav>
  );
}
