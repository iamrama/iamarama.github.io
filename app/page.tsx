'use client';

import { useEffect, useState } from 'react';
import PortfolioLanding from '@/components/PortfolioLanding';

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + 1, 100);
      setProgress(current);

      if (current >= 100) {
        clearInterval(timer);
        setShowPage(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;

    if (!showPage) {
      html.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      html.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [showPage]);

  if (!showPage) {
    return (
      <main className="fixed inset-0 w-screen max-w-full overflow-hidden bg-[#f2e7d7] px-6">
        <div className="flex min-h-full items-center justify-center">
          <div className="w-full max-w-md rounded-3xl border border-[#c9b8a2] bg-[#f8efe2] p-8 shadow-[0_18px_54px_rgba(88,66,40,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7d6a53]">Loading Portfolio</p>
            <p className="mt-3 text-4xl font-bold text-[#2245c4]">{progress}%</p>
            <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-[#e8d8c5]">
              <div
                className="h-full rounded-full bg-[#2245c4] transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }

  return <PortfolioLanding />;
}
