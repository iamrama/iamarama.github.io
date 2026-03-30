'use client';

import Link from 'next/link';

export default function Banner() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation Section */}
      <nav className="bg-white dark:bg-black border-b-2 border-black dark:border-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-black dark:text-white">
                Portfolio
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-black dark:text-white hover:font-bold transition-all">
                About
              </Link>
              <Link href="#projects" className="text-black dark:text-white hover:font-bold transition-all">
                Projects
              </Link>
              <Link href="#contact" className="text-black dark:text-white hover:font-bold transition-all">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#e6edf7] dark:bg-[#0a0a0a]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: 0.85,
          }}
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.18)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center justify-center gap-8 text-center">
          {/* Left big text */}
          <div className="space-y-8 flex flex-col items-center text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-300">Hi 👋 I&apos;m</p>
            <h1 className="text-6xl md:text-8xl leading-tight font-black bg-linear-to-b from-white to-[#e6edf7] dark:from-white dark:to-[#0a0a0a] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)] dark:drop-shadow-none">
              <span className="block">Ramakrishnan</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Branding, Product UI/UX & Design. 7+ years of award-winning creative design expertise in California, USA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-900 transition">
                Let’s Discuss
              </Link>
              <Link href="#projects" className="inline-flex items-center justify-center border-2 border-black dark:border-white text-black dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition">
                View Work
              </Link>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <svg className="absolute bottom-0 left-0 w-full h-28" viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path d="M0,30 C360,120 1080,-30 1440,60 L1440,150 L0,150 Z" fill="#f8fafc" className="dark:fill-[#010101]" />
        </svg>
      </section>
    </div>
  );
}