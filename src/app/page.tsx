"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import About from "@/components/About";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1500);
    const removeTimer = setTimeout(() => setShowSplash(false), 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#1e2127] text-white">
      {/* Splash Screen */}
      {showSplash && (
        <div
          className={`fixed inset-0 flex flex-col items-center justify-center px-4 sm:px-6 bg-[#1e2127] z-50 transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 animate-fade-in">
            Surya Teja Kamineni
          </h1>
          <p className="text-base sm:text-lg opacity-70 animate-fade-in">
            Front-End Developer
          </p>
        </div>
      )}

      {/* Main Content */}
      {!showSplash && (
        <main className="relative min-h-screen bg-[#1e2127] text-white">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      )}
    </div>
  );
}
