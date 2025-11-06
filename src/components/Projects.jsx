import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black to-black">
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden>
        <div className="mx-auto max-w-7xl h-full blur-3xl"/>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-white/70">A selection of work that blends code, craft and interaction.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
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
