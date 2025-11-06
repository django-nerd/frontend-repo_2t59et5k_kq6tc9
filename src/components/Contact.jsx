import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.15),transparent_60%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
            <Mail size={18} />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something</h2>
        </div>

        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
          <input
            required
            type="text"
            placeholder="Your name"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30"
          />
          <input
            required
            type="email"
            placeholder="Email address"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30"
          />
          <textarea
            required
            placeholder="Project details"
            rows={5}
            className="md:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30"
          />
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-sm text-white/70">Prefer email? hello@yourdomain.dev</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2 font-medium hover:bg-white/90 transition-colors"
            >
              <Send size={16} />
              Send message
            </button>
          </div>
          {status && <p className="md:col-span-2 text-emerald-300">{status}</p>}
        </form>
      </div>
    </section>
  );
}
