'use client';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-white dark:bg-black border-b-2 border-black dark:border-white flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-6xl md:text-8xl font-black mb-8 bg-linear-to-b from-white to-white dark:from-white dark:to-black bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)] dark:drop-shadow-none">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-black dark:text-white mb-6 leading-8">
              I'm a passionate developer with expertise in building modern web applications using React, Next.js, and Tailwind CSS. With over 5 years of experience in full-stack development, I've helped numerous companies transform their digital presence.
            </p>
            <p className="text-lg text-black dark:text-white mb-6 leading-8">
              I specialize in creating responsive, user-friendly interfaces and scalable backend solutions. My approach combines clean code, best practices, and a focus on user experience.
            </p>
          </div>
          <div className="border-2 border-black dark:border-white p-8">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Skills</h3>
            <ul className="space-y-3">
              <li className="text-black dark:text-white">• React & Next.js</li>
              <li className="text-black dark:text-white">• TypeScript</li>
              <li className="text-black dark:text-white">• Tailwind CSS</li>
              <li className="text-black dark:text-white">• Node.js & Express</li>
              <li className="text-black dark:text-white">• MongoDB & PostgreSQL</li>
              <li className="text-black dark:text-white">• REST APIs & GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}