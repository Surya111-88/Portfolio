"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contacts() {
  return (
    <section
      id="contact"
      className="bg-[#1e2127] text-white py-12 border-t border-gray-700"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-6">
          Let’s connect! You can find me here:
        </p>

        {/* Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Surya111-88"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/surya-kamineni"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin size={40} />
          </a>
        </div>

        {/* Footer text */}
        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Surya Teja Kamineni. All rights reserved.
        </p>
      </div>
    </section>
  );
}
