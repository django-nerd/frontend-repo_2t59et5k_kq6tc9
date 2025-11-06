import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useRef } from 'react';

const roles = [
  {
    company: 'Tech Labs',
    role: 'Senior Frontend Engineer',
    period: '2023 — Present',
    points: [
      'Led immersive product experiences with React, Spline and motion design.',
      'Shipped design system components improving DX and accessibility.',
      'Partnered with backend to optimize APIs for high‑performance UI.',
    ],
  },
  {
    company: 'CloudForge',
    role: 'Full‑stack Developer',
    period: '2021 — 2023',
    points: [
      'Built realtime dashboards with websockets and server‑sent events.',
      'Implemented CI workflows and monitoring for rapid iteration.',
      'Delivered end‑to‑end features across React, FastAPI and DBs.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Frontend Specialist',
    period: '2019 — 2021',
    points: [
      'Created marketing sites and product MVPs with modern stacks.',
      'Designed playful micro‑interactions focused on usability.',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const ySlow = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const yFast = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="experience" ref={ref} className="relative py-24 bg-black text-white overflow-hidden">
      {/* Parallax background accents */}
      <motion.div
        style={{ y: ySlow }}
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
        aria-hidden
      />
      <motion.div
        style={{ y: yFast }}
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
            <Briefcase size={18} />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h2>
        </div>

        <div className="relative border-l border-white/10 ml-3 pl-6 space-y-8">
          {roles.map((job, idx) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative"
            >
              <span className="absolute -left-8 top-2 h-4 w-4 rounded-full bg-white" />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{job.role} · <span className="text-white/80">{job.company}</span></h3>
                  <span className="text-sm text-white/60">{job.period}</span>
                </div>
                <ul className="mt-3 list-disc pl-5 text-white/80 space-y-1">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
