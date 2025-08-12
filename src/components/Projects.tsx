export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing my skills, projects, and contact information.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Order & Delivery Website",
      description:
        "A full-stack web application. Features include dashboard, order placement, delivery tracking, invoice generation, and PDF export etc...",
      tech: ["React", "Node.js", "Supabase", "Tailwind CSS", "Postgresql"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#1e2127] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#2a2d34] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-700 px-3 py-1 rounded-full"
                  >
                    {t}
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
