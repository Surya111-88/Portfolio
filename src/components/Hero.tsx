"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#1e2127] text-white px-6 md:px-16"
    >
      {/* Text Side */}
      <motion.div
        className="w-full md:flex-1 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold leading-snug">
          Hi, I&apos;m
          <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Surya Teja Kamineni
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-300 max-w-full md:max-w-xl">
          A passionate front-end developer creating beautiful and functional
          web experiences with modern tools like React, Next.js and Tailwind CSS
        </p>
        <div className="space-x-2 sm:space-x-4">
          <motion.a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium transition-transform duration-300 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="border border-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded font-medium transition-transform duration-300 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* Image Side */}
      <motion.div
        className="w-full md:flex-1 mt-40 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <Image
          src="/image.png"
          alt="Surya Teja Kamineni"
          width={320}
          height={320}
          className="rounded-full border-4 border-blue-500 shadow-lg object-cover w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80"
        />

      </motion.div>
    </section>
  );
}
