import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useCallback } from 'react';

export default function Hero() {
  // Mouse-parallax decorative orbs (do not block Spline interactions)
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const xSoft = useSpring(useTransform(mvX, (v) => v * 0.06), { stiffness: 120, damping: 20 });
  const ySoft = useSpring(useTransform(mvY, (v) => v * 0.06), { stiffness: 120, damping: 20 });
  const xTiny = useSpring(useTransform(mvX, (v) => v * -0.03), { stiffness: 120, damping: 20 });
  const yTiny = useSpring(useTransform(mvY, (v) => v * -0.03), { stiffness: 120, damping: 20 });

  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mvX.set(e.clientX - cx);
    mvY.set(e.clientY - cy);
  }, [mvX, mvY]);

  return (
    <section id="hero" onMouseMove={onMouseMove} className="relative min-h-[90vh] w-full overflow-hidden text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      {/* Mouse-parallax decorative layers (non-interactive) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full blur-3xl"
        style={{ x: xSoft, y: ySoft, background: 'radial-gradient(circle at 30% 30%, rgba(168,85,247,0.35), transparent 60%)' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full blur-3xl"
        style={{ x: xTiny, y: yTiny, background: 'radial-gradient(circle at 70% 70%, rgba(56,189,248,0.3), transparent 60%)' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex min-h-[90vh] items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight"
          >
            Building playful, modern software for the web
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-4 text-lg text-white/80"
          >
            I’m a full‑stack developer crafting delightful user experiences with clean code,
            interactive 3D, and thoughtful motion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="rounded-full bg-white text-black px-5 py-2 font-medium hover:bg-white/90 transition-colors">See projects</a>
            <a href="#contact" className="rounded-full border border-white/30 px-5 py-2 font-medium hover:bg-white/10 transition-colors">Let’s collaborate</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
