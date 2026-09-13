import { Mail, Download, MapPin, GraduationCap, Code2 } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const stats = [
  { icon: MapPin, label: 'Location', value: 'Ghaziabad, India' },
  { icon: GraduationCap, label: 'Degree', value: 'B.Tech CSE (2025–29)' },
  { icon: Code2, label: 'Focus', value: 'Full-Stack Development' },
]

export default function About() {
  const { ref, isVisible } = useScrollAnimation()
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation()

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Who I am</p>
          <h2 className="section-title text-white">About <span className="text-gradient">Me</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cobalt-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <div
            ref={ref}
            className={`flex justify-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative group">
              {/* Gradient border frame */}
              <div className="w-72 h-80 rounded-2xl bg-gradient-to-br from-violet-500 via-cobalt-600 to-violet-800 p-[2px] shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-dark-900 overflow-hidden">
                  <img src="/me.jpg" alt="Aditya Singh" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 text-sm font-medium text-white border border-violet-500/30">
                ✨ Open to Work
              </div>
              {/* Decorative dot grid */}
              <div className="absolute -top-6 -left-6 w-24 h-24 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)',
                  backgroundSize: '8px 8px'
                }}
              />
            </div>
          </div>

          {/* Text side */}
          <div
            ref={ref2}
            className={`transition-all duration-700 delay-200 ${
              isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              First-Year CSE Student & Developer
            </h3>
            <div className="w-10 h-0.5 bg-gradient-to-r from-violet-500 to-cobalt-500 rounded mb-6" />

            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a first-year B.Tech student specializing in Computer Science with a solid
              foundation in web development, problem-solving, and emerging technologies.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              My journey in technology began with curiosity and has evolved into a passion
              for creating user-friendly and efficient applications. I'm constantly learning,
              building, and pushing my limits to become a skilled full-stack developer.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-3 mb-8">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 glass rounded-xl px-5 py-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2 text-sm"
              >
                <Mail size={15} />
                Contact Me
              </button>
              <a href="/resume.pdf" download className="btn-outline flex items-center gap-2 text-sm">
                <Download size={15} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}