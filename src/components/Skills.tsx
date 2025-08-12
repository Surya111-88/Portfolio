"use client";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import "../styles/skills.css";

export default function Skills() {
  const skills = [
    { name: "SQL", icon: <FaDatabase size={50} color="#336791" />, desc: "Manage and query databases." }, 
    { name: "CSS", icon: <FaCss3Alt size={50} color="#1572B6" />, desc: "Style and layout websites." },
    { name: "JavaScript", icon: <FaJsSquare size={50} color="#F7DF1E" />, desc: "Add interactivity to pages." },
    { name: "React", icon: <FaReact size={50} color="#61DAFB" />, desc: "Build UIs with components." },
    { name: "Next.js", icon: <SiNextdotjs size={50} color="white" />, desc: "Server-side rendering & routing." },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color="#06B6D4" />, desc: "Utility-first CSS framework." },
    { name: "Git", icon: <FaGitAlt size={50} color="#F1502F" />, desc: "Version control for code." },
    { name: "Node.js", icon: <FaNodeJs size={50} color="#68A063" />, desc: "JavaScript runtime for backend." },
    
  ];

  return (
    <section id="skills" className="py-20 bg-[#1e2127] text-white px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`group relative flex flex-col items-center p-6 bg-[#2a2d34] rounded-lg shadow-lg 
                          hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300 
                          float-anim delay-${i % 4}`}
            >
              {/* Wave + Icon */}
              <div className="relative flex items-center justify-center">
                <span className="wave-ring absolute"></span>
                {skill.icon}
              </div>

              {/* Name */}
              <p className="mt-4 text-lg font-medium">{skill.name}</p>

              {/* Outside Tooltip */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 
                              px-3 py-2 bg-gray-800 text-sm text-gray-200 rounded-lg shadow-lg 
                              opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                {skill.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
