import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 text-white bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_60%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-300">
            <User size={18} />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="text-white/80 leading-relaxed">
              I’m a software developer focused on crafting immersive web experiences and robust backend systems.
              I love shipping end‑to‑end features—from clean APIs to playful interfaces with subtle motion and 3D.
            </p>
            <p className="mt-4 text-white/80 leading-relaxed">
              My toolkit includes React, FastAPI, and Tailwind; I care deeply about accessibility, performance,
              and creating interfaces that feel alive.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {['React & TypeScript','FastAPI & Python','Tailwind & Framer Motion','MongoDB & PostgreSQL'].map(skill => (
              <li key={skill} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">{skill}</li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
