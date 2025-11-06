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
        <ParallaxBand strength={26} tint="purple" />
        <About />
        <ParallaxBand strength={34} tint="sky" invert />
        <Experience />
        <ParallaxBand strength={28} tint="purple" />
        <TechOrbit />
        <ParallaxBand strength={22} tint="sky" invert />
        <Projects />
        <ParallaxBand strength={18} tint="purple" />
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

function TechOrbit() {
  // A subtle 3D-inspired parallax ring of dots that orbits as you scroll
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section ref={ref} className="relative py-16 bg-black overflow-hidden" aria-hidden>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative h-48">
          <motion.div
            style={{ rotate, scale }}
            className="absolute inset-0 m-auto h-48 w-48 rounded-full"
          >
            {/* ring using multiple tiny dots */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)',
              backgroundSize: '10px 10px',
              maskImage: 'radial-gradient(circle, transparent 54px, black 56px, black 80px, transparent 82px)'
            }} />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 -z-0" />
        </div>
      </div>
    </section>
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
