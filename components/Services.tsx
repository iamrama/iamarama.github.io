'use client';

import { useState, useEffect } from 'react';

export default function Services() {
  const services = [
    {
      title: 'Branding',
      summary: 'Create memorable visual brand identities and tone of voice.',
      details: 'Logo design, visual identity, brand guidelines, messaging strategy, and brand toolkits for consistent experiences.',
    },
    {
      title: 'Design',
      summary: 'Efficient, knowledgeable, & smooth experience. Highly recommended.',
      details: 'UX research, wireframes, prototypes, interface design, and usability testing focused on conversion and accessibility.',
    },
    {
      title: 'Marketing',
      summary: 'Launch high-impact campaigns with measurable results.',
      details: 'Campaign strategy, content creation, social media planning, SEO, email marketing, and performance reporting.',
    },
    {
      title: 'Code',
      summary: 'Clean, scalable implementation for modern web products.',
      details: 'React/Next.js, TypeScript, API design, backend integration, CI/CD automation, and production deployment support.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="services" className="bg-[#f4f7fb] dark:bg-[#0b0d12] py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-6xl md:text-8xl font-black mb-16 bg-linear-to-b from-white to-[#f4f7fb] dark:from-white dark:to-[#0b0d12] bg-clip-text text-transparent">Services</h2>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => {
            const isOpen = index === activeIndex;
            return (
              <div
                key={service.title}
                className={`rounded-2xl border-2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <div>
                    <h3 className={`text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none bg-linear-to-b from-white to-[#f4f7fb] dark:from-white dark:to-[#0b0d12] bg-clip-text text-transparent ${
                      isOpen ? 'animate-title-pop opacity-100' : 'opacity-75'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="mt-3 text-xl md:text-2xl text-gray-600 dark:text-gray-300">{service.summary}</p>
                  </div>
                  <span className="text-5xl text-black dark:text-white">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="overflow-hidden transition-all duration-500 max-h-96">
                    <div className="px-8 pb-8 pt-4 text-lg md:text-xl text-gray-700 dark:text-gray-200 animate-fade-in">
                      {service.details}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}