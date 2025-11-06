import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    title: 'Realtime Dashboard',
    description: 'Streamed metrics, websockets, and interactive charts with a focus on performance and DX.',
    tags: ['React', 'WebSockets', 'Tailwind'],
    url: '#',
  },
  {
    title: '3D Product Configurator',
    description: 'Interactive 3D experience powered by Spline and custom shaders for a retail brand.',
    tags: ['Spline', 'Three.js', 'UX'],
    url: '#',
  },
  {
    title: 'AI Content Assistant',
    description: 'Content pipeline with embeddings, vector search, and a playful chat interface.',
    tags: ['FastAPI', 'Postgres', 'OpenAI'],
    url: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yBack = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yFront = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="projects" ref={ref} className="relative py-24 bg-gradient-to-b from-black to-black overflow-hidden">
      {/* Parallax background accents */}
      <motion.div
        aria-hidden
        style={{ y: yBack }}
        className="pointer-events-none absolute -top-20 -left-24 h-80 w-80 rounded-full blur-3xl"
      >
        <div className="h-full w-full rounded-full" style={{ background: 'radial-gradient(circle at 40% 40%, rgba(168,85,247,0.20), transparent 60%)' }} />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: yFront }}
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl"
      >
        <div className="h-full w-full rounded-full" style={{ background: 'radial-gradient(circle at 60% 60%, rgba(56,189,248,0.22), transparent 60%)' }} />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-white/70">A selection of work that blends code, craft and interaction.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.url}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:border-white/20 transition-colors"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <ExternalLink className="text-white/60 group-hover:text-white" size={18} />
              </div>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs rounded-full bg-white/10 px-2 py-1 text-white/80">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
