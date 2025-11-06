import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <main>
        <Hero />
        <ParallaxSeparator />
        <About />
        <ParallaxSeparator invert />
        <Projects />
        <ParallaxSeparator />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

function ParallaxSeparator({ invert = false }) {
  return (
    <div
      className={`relative h-24 overflow-hidden ${invert ? 'bg-gradient-to-b' : 'bg-gradient-to-t'} from-black via-transparent to-black`}
      aria-hidden
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.2),transparent_60%)] animate-pulse"
        style={{ transform: 'translateZ(0)' }}
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
