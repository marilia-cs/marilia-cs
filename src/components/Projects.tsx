import { getTranslations } from "next-intl/server";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  topics: string[];
}

async function getRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/marilia-cs/repos?sort=updated&per_page=20",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const repos: GitHubRepo[] = await res.json();
    return repos.filter(
      (r) => !r.fork && r.description && r.name !== "marilia-cs" && r.name !== "marilia-cs.github.io"
    );
  } catch {
    return [];
  }
}

export default async function Projects() {
  const t = await getTranslations("projects");
  const repos = await getRepos();

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="mb-14">
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
          02
        </p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3">
          {t("title")}
        </h2>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          {t("subtitle")}
        </p>
      </div>

      {repos.length === 0 ? (
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          {t("empty")}
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, index) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-6 flex flex-col gap-4 group transition-all duration-200 hover:-translate-y-0.5 border border-white/5 hover:border-white/[0.12]"
              style={{ background: "var(--surface)" }}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "var(--accent)" }}
                >
                  <path d="M7 7h10v10M7 17 17 7" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-medium mb-2">{repo.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {repo.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {repo.language && (
                  <span
                    className="text-xs px-2 py-1 rounded-md"
                    style={{ background: "var(--border)", color: "var(--text-muted)" }}
                  >
                    {repo.language}
                  </span>
                )}
                {repo.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs px-2 py-1 rounded-md"
                    style={{ background: "var(--border)", color: "var(--text-muted)" }}
                  >
                    {topic}
                  </span>
                ))}
                {repo.stargazers_count > 0 && (
                  <span className="text-xs ml-auto flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                    ★ {repo.stargazers_count}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
