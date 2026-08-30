export default function Home() {
  const techStack = [
    {
      name: "Next.js 16",
      description: "App Router, React 19 support, and fast Server Components",
      badge: "Framework",
      color: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30",
    },
    {
      name: "Tailwind CSS v4",
      description: "Next-gen CSS framework with CSS-first configuration",
      badge: "Styling",
      color: "from-cyan-500/20 to-teal-500/20 text-cyan-400 border-cyan-500/30",
    },
    {
      name: "TypeScript 5",
      description: "Full end-to-end type safety with strict mode enabled",
      badge: "Language",
      color:
        "from-indigo-500/20 to-blue-500/20 text-indigo-400 border-indigo-500/30",
    },
    {
      name: "xior + TanStack Query",
      description:
        "Lightweight HTTP client with powerful asynchronous state management",
      badge: "Data Fetching",
      color:
        "from-orange-500/20 to-amber-500/20 text-amber-400 border-amber-500/30",
    },
  ];

  const features = [
    {
      title: "ESLint & Prettier Setup",
      description: "Pre-configured format on save with Tailwind class sorting.",
    },
    {
      title: "Husky & Lint-Staged",
      description:
        "Automatic pre-commit hooks to keep code clean and error-free.",
    },
    {
      title: "API & Query Provider",
      description: "Pre-configured xior instance and TanStack Query provider.",
    },
    {
      title: "Clean Directory Structure",
      description: "Organized layout with path aliases (@/lib, @/providers).",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-100 selection:bg-indigo-500 selection:text-white">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 py-20">
        {/* Header Section */}
        <div className="flex max-w-3xl flex-col items-center space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-xs font-medium text-zinc-400 backdrop-blur-sm">
            <span className="flex size-2 animate-pulse rounded-full bg-emerald-500" />
            Next.js Starter Boilerplate Ready
          </div>

          <h1 className="bg-linear-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            Build faster with a modern Next.js starter setup
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
            Pre-configured with linter, formatter, type checker, git hooks, HTTP
            client, and React Query so you don&apos;t have to build from
            scratch.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-sm transition-colors hover:bg-zinc-200"
            >
              Next.js Docs
            </a>
            <a
              href="https://tanstack.com/query/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-800"
            >
              TanStack Query Docs
            </a>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-20 w-full">
          <h2 className="mb-8 text-center text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            Core Tech Stack
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group relative flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-200 hover:border-zinc-700"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-block rounded-md border bg-linear-to-r px-2.5 py-0.5 text-xs font-medium ${tech.color}`}
                    >
                      {tech.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-indigo-400">
                      {tech.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 w-full">
          <h2 className="mb-8 text-center text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            Included Features & Pre-configurations
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-5 text-left"
              >
                <div className="mb-2 flex items-center gap-2">
                  <svg
                    className="size-4 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <h4 className="text-sm font-medium text-zinc-200">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started Code Block */}
        <div className="mt-16 w-full max-w-2xl">
          <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/90 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950/60 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-red-500/80" />
                <div className="size-3 rounded-full bg-yellow-500/80" />
                <div className="size-3 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-xs text-zinc-500">
                Available Commands
              </span>
            </div>
            <div className="space-y-3 p-6 font-mono text-xs text-zinc-300">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500"># Start dev server</span>
                <span className="text-indigo-400">bun dev</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500"># Format code</span>
                <span className="text-indigo-400">bun run format</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500"># Lint code</span>
                <span className="text-indigo-400">bun run lint</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500"># Type check</span>
                <span className="text-indigo-400">bun run type-check</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500"># Production build</span>
                <span className="text-indigo-400">bun run build</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 py-6 text-center text-xs text-zinc-600">
        Next.js Starter Template &bull; Pre-configured for speed and quality
      </footer>
    </div>
  );
}
