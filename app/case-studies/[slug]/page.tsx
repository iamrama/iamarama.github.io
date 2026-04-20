import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { featuredProjects, getProjectBySlug, profile } from '@/content/portfolio';

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${project.title} Case Study | Ramakrishnan`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="sandal-theme relative min-h-screen w-full max-w-full overflow-x-hidden">
      <nav className="sticky top-0 z-50 border-b border-[#d8c4aa] bg-[#f8efe2]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="font-(family-name:--font-space-grotesk) text-lg font-semibold tracking-wide text-slate-900">
            {profile.name}
          </Link>
          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <Link href="/#projects" className="transition hover:text-slate-900">Projects</Link>
            <Link href="/#ux-showcase" className="transition hover:text-slate-900">UX</Link>
            <Link href="/#blog" className="transition hover:text-slate-900">Blog</Link>
            <Link href="/#about" className="transition hover:text-slate-900">About</Link>
            <Link href="/#contact" className="transition hover:text-slate-900">Contact</Link>
          </div>
          <a
            href="mailto:rkk027@gmail.com"
            className="rounded-full border border-[#d8c4aa] bg-[#f3e8d9] px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-[#e8dcc9]"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl space-y-10 px-6 py-16 lg:px-8">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/#projects" className="text-sm font-medium text-[#2245c4] transition hover:text-[#1b37a2]">
            Back to featured projects
          </Link>
        </div>

        <section className="section-shell rounded-4xl p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#2245c4]/75">{project.category}</p>
          <h1 className="mt-4 font-(family-name:--font-space-grotesk) text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{project.overview}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-[#d8c4aa] bg-[#f6ecdf] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Role</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">{project.role}</p>
            </div>
            <div className="rounded-3xl border border-[#d8c4aa] bg-[#f6ecdf] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Problem</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">{project.problem}</p>
            </div>
            <div className="rounded-3xl border border-[#d8c4aa] bg-[#f6ecdf] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Result</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">{project.result}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-shell rounded-4xl p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#2245c4]/75">User Research</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
              {project.research.map((item) => (
                <div key={item} className="rounded-3xl border border-[#d8c4aa] bg-[#f6ecdf] p-5">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="section-shell rounded-4xl p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#2245c4]/75">Wireframes and Flow</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {project.wireframes.map((item, index) => (
                <div key={item} className="rounded-3xl border border-dashed border-[#d8c4aa] bg-[#f2e6d7] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Step {index + 1}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell rounded-4xl p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#2245c4]/75">Design Decisions</p>
              <div className="mt-5 space-y-4">
                {project.designDecisions.map((decision) => (
                  <div key={decision.title} className="rounded-3xl border border-[#d8c4aa] bg-[#f6ecdf] p-5">
                    <h2 className="font-(family-name:--font-space-grotesk) text-xl font-semibold text-slate-900">
                      {decision.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{decision.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#2245c4]/75">Development Approach</p>
              <div className="mt-5 space-y-4">
                {project.developmentApproach.map((item) => (
                  <div key={item} className="rounded-3xl border border-[#d8c4aa] bg-[#f6ecdf] p-5 text-sm leading-7 text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="section-shell rounded-4xl p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#2245c4]/75">Challenges and Solutions</p>
            <div className="mt-5 space-y-4">
              {project.challenges.map((challenge) => (
                <div key={challenge.title} className="rounded-3xl border border-[#d8c4aa] bg-[#f6ecdf] p-5">
                  <h2 className="font-(family-name:--font-space-grotesk) text-xl font-semibold text-slate-900">
                    {challenge.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{challenge.problem}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{challenge.solution}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="section-shell rounded-4xl p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#2245c4]/75">Outcome</p>
            <div className="mt-5 grid gap-4">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-[#d8c4aa] bg-[#f2e6d7] p-5">
                  <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-3xl border border-[#d8c4aa] bg-[#f6ecdf] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Final outcome</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {project.outcome.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell rounded-4xl p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#2245c4]/75">Key Features</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.keyFeatures.map((feature) => (
                  <span key={feature} className="rounded-full border border-[#d8c4aa] bg-[#f6ecdf] px-4 py-2 text-sm text-slate-700">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#2245c4]/75">Tech Stack</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-[#2245c4]/30 bg-[#edf1ff] px-4 py-2 text-sm text-[#2245c4]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-3xl border border-[#d8c4aa] bg-[#f2e6d7] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Why it worked</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The solution aligned product strategy, UX hierarchy, and engineering discipline so users got a simpler experience and the team gained a more durable delivery foundation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}