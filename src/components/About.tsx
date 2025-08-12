"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-[#1e2127] text-white px-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm Surya Teja Kamineni, a passionate front-end developer with a knack
          for crafting beautiful, functional web experiences. I specialize in
          modern frameworks like Next.js, React, and Tailwind CSS, and I love
          bringing designs to life with animation and smooth user interactions.
        </motion.p>
      </div>
    </section>
  );
}
