'use client';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js and Stripe',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe'],
    },
    {
      title: 'Project Management Tool',
      description: 'Collaborative project management application with real-time updates',
      technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social media accounts',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-white dark:bg-black border-b-2 border-black dark:border-white flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-6xl md:text-8xl font-black mb-12 bg-linear-to-b from-white to-white dark:from-white dark:to-black bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)] dark:drop-shadow-none">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border-2 border-black dark:border-white p-8 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-lg mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="border-2 border-current px-3 py-1 rounded font-semibold text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}