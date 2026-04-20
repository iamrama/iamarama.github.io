'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '@/content/portfolio';

type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  author: string;
};

const sectionEnter = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const fillTextVariants = {
  hidden: {
    backgroundSize: '200% 100%',
    backgroundPosition: '100% 0',
  },
  visible: {
    backgroundPosition: '0 0',
    transition: { duration: 1.2, ease: 'easeInOut' as const },
  },
};

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Create scroll-linked animations for header
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.7]);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      setIsLoading(true);
      setLoadingProgress(0);

      // Simulate initial loading delay
      const progressInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev < 90) {
            return prev + Math.random() * 30;
          }
          return prev;
        });
      }, 200);

      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rk27');
        const data = await response.json();

        if (data.items) {
          setBlogPosts(data.items);
          setLoadingProgress(95);
        }
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
        setLoadingProgress(95);
      } finally {
        clearInterval(progressInterval);
        setLoadingProgress(100);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };

    fetchMediumPosts();
  }, []);

  return (
    <main className="sandal-theme relative min-h-screen w-full max-w-full overflow-x-hidden">
      <nav className="sticky top-0 z-50 border-b border-[#d8c4aa] bg-[#f8efe2]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="font-(family-name:--font-space-grotesk) text-lg font-semibold tracking-wide text-slate-900">
            {profile.name}
          </Link>
          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <Link href="/#projects" className="transition hover:text-slate-900">
              Projects
            </Link>
            <Link href="/#ux-showcase" className="transition hover:text-slate-900">
              UX
            </Link>
            <Link href="/blog" className="transition hover:text-slate-900">
              Blog
            </Link>
            <Link href="/#about" className="transition hover:text-slate-900">
              About
            </Link>
            <Link href="/#contact" className="transition hover:text-slate-900">
              Contact
            </Link>
          </div>
          <a
            href="mailto:rkk027@gmail.com"
            className="rounded-full border border-[#d8c4aa] bg-[#f3e8d9] px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-[#e8dcc9]"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-96 max-w-sm px-6">
            <motion.div
              className="mb-6 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                className="font-(family-name:--font-space-grotesk) text-2xl font-semibold"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #2245c4 0%, #1b37a2 50%, #2245c4 100%)',
                  backgroundSize: '200% 100%',
                  backgroundPosition: '100% 0',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                variants={fillTextVariants}
                initial="hidden"
                animate="visible"
              >
                Loading Articles
              </motion.h2>
              <p className="mt-2 text-sm text-slate-600">Fetching latest Medium posts...</p>
            </motion.div>

            <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-[#d8c4aa]/30">
              <motion.div
                className="h-full w-full rounded-full bg-linear-to-r from-[#2245c4] to-[#1b37a2]"
                initial={{ width: '0%' }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <motion.div
              className="text-center text-sm font-semibold text-slate-900"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {Math.round(loadingProgress)}%
            </motion.div>
          </div>
        </motion.div>
      )}

      <motion.section
        ref={containerRef}
        className="px-6 py-16 lg:px-8"
        variants={sectionEnter}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-7xl space-y-10">
          <motion.div 
            variants={reveal} 
            className="max-w-2xl space-y-4"
            style={{ y: headerY, opacity: headerOpacity }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#2245c4]/75">Blog & Articles</p>
            <motion.h1 
              className="font-(family-name:--font-space-grotesk) text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Thoughts on Mobile Product Design
            </motion.h1>
            <motion.p 
              className="text-base leading-7 text-slate-600 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I share insights on UX strategy, Flutter architecture, performance optimization, and lessons from shipping apps at scale.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <motion.article
                  key={post.link}
                  className="section-shell flex flex-col rounded-4xl p-6"
                  variants={staggerItem}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <motion.span 
                      className="inline-block rounded-full border border-[#d8c4aa] bg-[#edf1ff] px-3 py-1 text-xs font-medium text-[#2245c4]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {new Date(post.pubDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </motion.span>
                  </div>
                  <motion.h3 
                    className="font-(family-name:--font-space-grotesk) line-clamp-3 text-xl font-semibold text-slate-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {post.title}
                  </motion.h3>
                  <motion.p 
                    className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-slate-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {post.description?.replace(/<[^>]*>/g, '')}
                  </motion.p>
                  <motion.a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[#2245c4] transition hover:text-[#1b37a2]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Read on Medium →
                  </motion.a>
                </motion.article>
              ))
            ) : (
              <motion.div
                variants={reveal}
                className="col-span-full rounded-4xl border border-[#d8c4aa] bg-[#f6ecdf] p-8 text-center"
              >
                <p className="text-slate-600">No blog posts available at the moment.</p>
              </motion.div>
            )}
          </motion.div>

          <motion.div 
            variants={reveal} 
            className="flex justify-center pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href="/#blog"
              className="rounded-full border border-[#d8c4aa] bg-[#f3e8d9] px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-[#2245c4] hover:bg-[#edf1ff] hover:text-[#2245c4]"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
