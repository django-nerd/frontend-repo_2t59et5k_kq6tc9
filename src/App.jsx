import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <main>
        <Hero />
        <ParallaxBand strength={20} tint="purple" />
        <About />
        <ParallaxBand strength={30} tint="sky" invert />
        <Experience />
        <ParallaxBand strength={24} tint="purple" />
        <Projects />
        <ParallaxBand strength={18} tint="sky" invert />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function ParallaxBand({ invert = false, strength = 24, tint = 'purple' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [invert ? strength : -strength, invert ? -strength : strength]);

  return (
    <div ref={ref} className="relative h-28 overflow-hidden bg-black" aria-hidden>
      <motion.div
        style={{ y }}
        className={`absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_60%)] ${
          tint === 'sky' ? 'bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_60%)]' : ''
        }`}
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
        <div className="text-white/60 text-sm">
          Built with love, motion and 3D.
        </div>
      </div>
    </footer>
  );
}
