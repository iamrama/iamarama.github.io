'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import {
  contactLinks,
  credibilityStats,
  featuredProjects,
  moreProjects,
  profile,
  services,
  skillGroups,
  uxShowcase,
} from '@/content/portfolio';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="font-(family-name:--font-space-grotesk) text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-slate-300 md:text-lg">{copy}</p>
    </div>
  );
}

export default function PortfolioLanding() {
  const [isMoreProjectsOpen, setIsMoreProjectsOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    restDelta: 0.001,
  });

  const projectNavItems = moreProjects.map((project, index) => ({
    index,
    label: project.title,
  }));

  useEffect(() => {
    document.body.style.overflow = isMoreProjectsOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMoreProjectsOpen]);

  const scrollToProject = (index: number) => {
    const target = sectionRefs.current[index];
    if (!target) {
      return;
    }
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveProjectIndex(index);
  };

  return (
    <main className="sandal-theme relative overflow-x-hidden">
      <motion.div
        className="pointer-events-none fixed left-0 right-0 top-0 z-80 h-1 origin-left bg-[#2245c4]"
        style={{ scaleX: scrollProgress }}
      />
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-lines absolute inset-x-0 top-0 h-128" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-[#d8c4aa] bg-[#f8efe2]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="font-(family-name:--font-space-grotesk) text-lg font-semibold tracking-wide text-white">
            {profile.name}
          </Link>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link href="#projects" className="transition hover:text-white">Projects</Link>
            <Link href="#ux-showcase" className="transition hover:text-white">UX</Link>
            <Link href="#about" className="transition hover:text-white">About</Link>
            <Link href="#contact" className="transition hover:text-white">Contact</Link>
          </div>
          <Link
            href="#contact"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/16"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </nav>

      <section id="home" className="relative bg-transparent px-6 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={reveal} className="glass-panel inline-flex rounded-full px-4 py-2 text-sm text-slate-200">
              {profile.role}
            </motion.div>
            <motion.div variants={reveal} className="glass-panel rounded-4xl p-7 md:p-10">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#2245c4]">
                Mobile strategy, UX thinking, production delivery
              </p>
              <h1 className="max-w-4xl font-(family-name:--font-space-grotesk) text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
                <span className="text-[#2245c4]">{profile.headline}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                {profile.intro}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                {profile.supporting}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-[#2245c4] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1b37a2]"
                >
                  View Projects
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-4xl bg-indigo-500/10 blur-3xl" />
            <div className="glass-panel relative overflow-hidden rounded-4xl p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-200">Animated UI Mock</p>
                  <p className="text-sm text-slate-400">Discovery to production view</p>
                </div>
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-[0.8fr_1fr]">
                <motion.div
                  className="phone-frame rounded-4xl border border-white/12 bg-slate-950/90 p-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                >
                  <div className="mb-4 rounded-2xl bg-white/6 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Today</p>
                    <p className="mt-2 text-sm font-medium text-white">Triage priority tasks before 9:30 AM</p>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-[#2245c4]/20 bg-[#2245c4]/10 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-[#2245c4]">UX flow</p>
                      <p className="mt-2 text-sm text-white">One-thumb capture with progressive details</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Impact</p>
                      <p className="mt-2 text-sm text-white">Fewer taps, faster completion, clearer next actions</p>
                    </div>
                  </div>
                </motion.div>
                <div className="space-y-4">
                  <div className="rounded-[1.75rem] border border-[#d8c4aa] bg-[#f6ecdf] p-5">
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span>Case study map</span>
                      <span>Problem to result</span>
                    </div>
                    <div className="mt-4 grid gap-3">
                      {['Research', 'Wireframes', 'Design system', 'Release plan'].map((item) => (
                        <div key={item} className="rounded-2xl border border-[#d8c4aa] bg-[#efe4d6] px-4 py-3 text-sm text-[#5f503d]">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.75rem] border border-white/12 bg-[#f4ebdc] p-5">
                    <p className="text-sm text-slate-300">Built for teams that need both product clarity and engineering reliability.</p>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-left">
                      <div className="rounded-2xl bg-slate-950/70 p-4">
                        <p className="text-2xl font-semibold text-white">UX</p>
                        <p className="mt-1 text-sm text-slate-400">flows, wireframes, testing</p>
                      </div>
                      <div className="rounded-2xl bg-slate-950/70 p-4">
                        <p className="text-2xl font-semibold text-white">Code</p>
                        <p className="mt-1 text-sm text-slate-400">architecture, delivery, impact</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="stats"
        className="scroll-mt-24 px-6 py-10 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {credibilityStats.map((stat) => (
            <motion.div key={stat.label} variants={reveal} className="section-shell rounded-[1.75rem] p-6">
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="scroll-mt-24 px-6 py-16 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Case studies that show problem solving, UX judgment, and shipping discipline"
            copy="Each project is framed the way hiring teams and clients actually evaluate work: what was broken, what changed, how the UX thinking supported the build, and what happened after release."
          />
          <div className="grid gap-6 px-4 py-2 md:px-8 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <motion.article
                key={project.slug}
                variants={reveal}
                whileHover={{ y: -8 }}
                className="section-shell flex h-full flex-col rounded-4xl p-6"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/75">{project.category}</p>
                    <h3 className="mt-2 font-(family-name:--font-space-grotesk) text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-6 text-slate-300">{project.summary}</p>
                <div className="mt-6 space-y-5 text-sm leading-6 text-slate-300">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.24em] text-slate-500">Tech</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span key={item} className="rounded-full border border-[#d8c4aa] bg-[#f6ecdf] px-3 py-1 text-xs text-[#5f503d] transition hover:border-[#2245c4] hover:bg-[#edf1ff] hover:text-[#2245c4]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-[0.24em] text-slate-500">Result</p>
                    <p>{project.result}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-[#d8c4aa] bg-[#f3e8d9] p-4">
                      <p className="text-lg font-semibold text-white">{metric.value}</p>
                      <p className="mt-1 text-xs text-slate-400">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  Open case study
                </Link>
              </motion.article>
            ))}
          </div>
          <motion.div variants={reveal} className="flex justify-center pt-2">
            <button
              type="button"
              onClick={() => setIsMoreProjectsOpen(true)}
              className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/16"
            >
              More Projects
            </button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="ux-showcase"
        className="scroll-mt-24 px-6 py-16 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="UX Design Showcase"
            title="Wireframes, user flows, and decisions that improve usability before code scales the problem"
            copy="Strong mobile products are shaped by what gets removed, clarified, and sequenced. My UX process is designed to reduce friction before engineering effort compounds it."
          />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div variants={reveal} className="section-shell rounded-4xl p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Flowboard</p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {['Entry point', 'Decision branch', 'Outcome state'].map((stage) => (
                  <div key={stage} className="rounded-3xl border border-[#d8c4aa] bg-[#f6ecdf] p-5">
                    <p className="text-sm font-medium text-white">{stage}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Improve completion speed with clearer actions, lower friction, and smarter flow sequencing.
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.75rem] border border-dashed border-[#d8c4aa] bg-[#f2e6d7] p-5 text-sm leading-7 text-slate-300">
                Before development starts, I map edge cases, empty states, and recovery paths so products stay usable under real-world conditions.
              </div>
            </motion.div>
            <div className="grid gap-6">
              {uxShowcase.map((item) => (
                <motion.div key={item.title} variants={reveal} className="section-shell rounded-4xl p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/75">Design principle</p>
                  <h3 className="mt-3 font-(family-name:--font-space-grotesk) text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="scroll-mt-24 px-6 py-16 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Skills and Stack"
            title="The blend of product, UX, and engineering depth behind the work"
            copy="I work across strategy, interface decisions, architecture, and release quality. The value is not just knowing the tools, but knowing when and why to use them."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <motion.div key={group.title} variants={reveal} className="section-shell rounded-4xl p-6">
                <h3 className="font-(family-name:--font-space-grotesk) text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-[#d8c4aa] bg-[#f6ecdf] px-3 py-2 text-sm text-[#5f503d] transition hover:border-[#2245c4] hover:bg-[#edf1ff] hover:text-[#2245c4]">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="scroll-mt-24 px-6 py-16 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1.1fr]">
          <motion.div variants={reveal} className="section-shell rounded-4xl p-6 lg:p-8">
            <SectionHeading
              eyebrow="About Me"
              title="I think in systems: product intent, user clarity, and engineering reality"
              copy="My approach combines UX reasoning with delivery discipline. I care about what users feel, what the business needs, and what the codebase must sustain six months after launch."
            />
          </motion.div>
          <motion.div variants={reveal} className="section-shell rounded-4xl p-6 lg:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'I favor lean, testable flows over feature-heavy interfaces that create friction.',
                'I structure mobile architecture so teams can add features without compounding delivery risk.',
                'I look for the gap between what stakeholders ask for and what users actually need to complete.',
                'I use metrics to validate design decisions, not just to decorate outcomes after launch.',
              ].map((statement) => (
                <div key={statement} className="rounded-3xl border border-white/10 bg-white/6 p-5 text-sm leading-7 text-slate-300">
                  {statement}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="services"
        className="scroll-mt-24 px-6 py-16 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Services"
            title="Ways I support product teams, founders, and client engagements"
            copy="Whether the need is a new product, a usability rethink, or a mobile app that needs serious stabilization, I focus on outcomes that move the business forward."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <motion.div key={service.title} variants={reveal} className="section-shell rounded-4xl p-6">
                <h3 className="font-(family-name:--font-space-grotesk) text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="scroll-mt-24 px-6 pb-24 pt-16 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="mx-auto max-w-7xl rounded-4xl border border-[#d8c4aa] bg-[#f6ecdf] p-8 shadow-[0_24px_90px_rgba(88,66,40,0.16)] lg:p-10">
          <motion.div variants={reveal} className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">Contact</p>
              <h2 className="mt-4 font-(family-name:--font-space-grotesk) text-3xl font-semibold text-white md:text-5xl">
                Need a mobile product partner who can think and execute?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                I&apos;m available for senior mobile roles, consulting, product redesign work, and performance-focused app engagements.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {contactLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-full border border-[#d8c4aa] bg-[#efe4d6] px-4 py-2 text-sm font-medium text-[#5f503d] transition hover:border-[#2245c4] hover:bg-[#edf1ff] hover:text-[#2245c4]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <motion.div variants={reveal} className="section-shell rounded-[1.75rem] p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Preferred engagements</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <p>Senior mobile app leadership</p>
                <p>UX-driven product rebuilds</p>
                <p>Flutter delivery and architecture</p>
                <p>Stabilization and performance rescue work</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <AnimatePresence>
        {isMoreProjectsOpen && (
          <motion.div
            className="fixed inset-0 z-80 bg-[rgba(160,132,98,0.28)] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 border border-[#d8c4aa] bg-[#f6ecdf]"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
            >
              <div className="mx-auto flex h-full w-full max-w-7xl flex-col">
                <div className="flex items-center justify-between px-6 pb-4 pt-5 lg:px-8">
                  <div className="flex items-center gap-4">
                    <span className="h-1.5 w-16 rounded-full bg-white/20" />
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">More Projects</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMoreProjectsOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c4aa] bg-[#efe4d6] text-lg font-medium text-[#5f503d] transition hover:border-[#2245c4] hover:bg-[#edf1ff] hover:text-[#2245c4]"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                <div className="relative flex-1 overflow-y-auto px-0 pb-4">
                  <div className="snap-y snap-mandatory">
                    {moreProjects.map((project, index) => (
                      <section
                        key={project.title}
                        ref={(el) => {
                          sectionRefs.current[index] = el;
                        }}
                        className="flex snap-start items-start px-6 py-0 lg:px-8"
                      >
                        <div className="glass-panel w-full rounded-4xl p-8 lg:p-10">
                          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">{project.category}</p>
                          <h3 className="mt-4 font-(family-name:--font-space-grotesk) text-4xl font-semibold text-white md:text-6xl">
                            {project.title}
                          </h3>
                          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{project.note}</p>
                          <div className="mt-8 grid gap-4 md:grid-cols-3">
                            <div className="rounded-3xl border border-[#d8c4aa] bg-[#efe4d6] p-5 text-sm leading-7 text-[#5f503d]">
                              Mobile-first product strategy and UX direction.
                            </div>
                            <div className="rounded-3xl border border-[#d8c4aa] bg-[#efe4d6] p-5 text-sm leading-7 text-[#5f503d]">
                              Scalable architecture and production-focused development.
                            </div>
                            <div className="rounded-3xl border border-[#d8c4aa] bg-[#efe4d6] p-5 text-sm leading-7 text-[#5f503d]">
                              Measurable delivery outcomes backed by release discipline.
                            </div>
                          </div>
                        </div>
                      </section>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#d8c4aa] px-0 py-0">
                  <div className="grid w-full grid-cols-3 gap-0 sm:grid-cols-6">
                    {projectNavItems.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => scrollToProject(item.index)}
                        className={`truncate border px-1 py-2 text-[11px] font-semibold transition ${
                          activeProjectIndex === item.index
                            ? 'border-[#2245c4] bg-[#edf1ff] text-[#2245c4]'
                            : 'border-[#d8c4aa] bg-[#efe4d6] text-[#5f503d] hover:border-[#2245c4] hover:bg-[#edf1ff] hover:text-[#2245c4]'
                        }`}
                        title={item.label}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
