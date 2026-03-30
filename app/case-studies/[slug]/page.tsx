import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { featuredProjects, getProjectBySlug } from '@/content/portfolio';

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
    <main className="min-h-screen bg-[linear-gradient(180deg,#090a0f_0%,#0b0b0f_52%,#10121c_100%)] px-6 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/#projects" className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
            Back to featured projects
          </Link>
        </div>

        <section className="glass-panel rounded-4xl p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">{project.category}</p>
          <h1 className="mt-4 font-(family-name:--font-space-grotesk) text-4xl font-semibold tracking-tight md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{project.overview}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Role</p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{project.role}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Problem</p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{project.problem}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Result</p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{project.result}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-shell rounded-4xl p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">User Research</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              {project.research.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/6 p-5">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="section-shell rounded-4xl p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">Wireframes and Flow</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {project.wireframes.map((item, index) => (
                <div key={item} className="rounded-3xl border border-dashed border-white/12 bg-slate-950/60 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Step {index + 1}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell rounded-4xl p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">Design Decisions</p>
              <div className="mt-5 space-y-4">
                {project.designDecisions.map((decision) => (
                  <div key={decision.title} className="rounded-3xl border border-white/10 bg-white/6 p-5">
                    <h2 className="font-(family-name:--font-space-grotesk) text-xl font-semibold text-white">
                      {decision.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{decision.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">Development Approach</p>
              <div className="mt-5 space-y-4">
                {project.developmentApproach.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/6 p-5 text-sm leading-7 text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="section-shell rounded-4xl p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">Challenges and Solutions</p>
            <div className="mt-5 space-y-4">
              {project.challenges.map((challenge) => (
                <div key={challenge.title} className="rounded-3xl border border-white/10 bg-white/6 p-5">
                  <h2 className="font-(family-name:--font-space-grotesk) text-xl font-semibold text-white">
                    {challenge.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{challenge.problem}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{challenge.solution}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="section-shell rounded-4xl p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">Outcome</p>
            <div className="mt-5 grid gap-4">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-3xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-3xl border border-white/10 bg-white/6 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Final outcome</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
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
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">Key Features</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.keyFeatures.map((feature) => (
                  <span key={feature} className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-200">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">Tech Stack</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Why it worked</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
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