import { Github, Linkedin, Mail, MapPin, GraduationCap, Briefcase, ChevronDown } from 'lucide-react'
import { useTypewriter } from '../hooks/useScrollAnimation'

const words = [
  'B.Tech CSE Student',
  'Aspiring Full-Stack Dev',
  'Problem Solver',
  'Open to Opportunities',
]

const socials = [
  { icon: Github, href: 'https://github.com/Adityasingh909', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/aditya-singh-computer-eng/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:adityasingh917023@gmail.com', label: 'Email' },
]

export default function Hero() {
  const typed = useTypewriter(words)

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-cobalt-600/20 blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-violet-800/10 blur-3xl animate-float-slow" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-violet-500 to-cobalt-600 flex items-center justify-center text-3xl font-display font-bold text-white shadow-2xl glow-violet animate-float">
              AS
            </div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-500 to-cobalt-500 opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-500 -z-10" />
          </div>
        </div>

        {/* Greeting */}
        <div className="mb-6 overflow-hidden">
          <p className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-3 animate-[fadeSlideUp_0.6s_ease_both]">
            Welcome to my portfolio
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient">Aditya Singh</span>
          </h1>
        </div>

        {/* Typewriter */}
        <div className="h-8 mb-6">
          <p className="text-violet-400 text-xl font-medium font-display">
            {typed}
            <span className="inline-block w-0.5 h-5 bg-violet-400 ml-1 animate-pulse" />
          </p>
        </div>

        {/* Bio */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Passionate about creating innovative web solutions and seeking
          opportunities to contribute to impactful projects.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary flex items-center gap-2"
          >
            <Mail size={16} />
            Get in Touch
          </button>
          <a
            href="/resume.pdf"
            download
            className="btn-outline flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download Resume
          </a>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-violet-400" />
            Ghaziabad, India
          </span>
          <span className="flex items-center gap-1.5">
            <GraduationCap size={14} className="text-violet-400" />
            B.Tech CSE @ KIET
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase size={14} className="text-violet-400" />
            Open to Opportunities
          </span>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mt-8">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-500/50 border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-violet-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
