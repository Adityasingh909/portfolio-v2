import { Github, ExternalLink, Clock } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Add your projects here — leave empty to show "Coming Soon" state
const projects = [
  // Example (uncomment and fill):
  // {
  //   title: 'My Project',
  //   description: 'A cool project description here...',
  //   tags: ['React', 'Node.js', 'MongoDB'],
  //   github: 'https://github.com/Adityasingh909/project',
  //   live: 'https://myproject.com',
  //   gradient: 'from-violet-500 to-cobalt-600',
  // },
]

function ProjectCard({ project, index }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl overflow-hidden border border-white/5 hover:border-violet-500/25 transition-all duration-500 group hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 120}ms`, transitionDuration: '600ms' }}
    >
      {/* Top gradient strip */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full glass border border-white/10 text-gray-400">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10"
            >
              <Github size={14} />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors px-3 py-2 rounded-lg bg-white/5 hover:bg-violet-500/10"
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function ComingSoon({ index }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl border border-dashed border-white/10 p-8 flex flex-col items-center justify-center text-center min-h-56 transition-all duration-600 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
        <Clock size={20} className="text-gray-500" />
      </div>
      <p className="text-gray-500 font-medium text-sm">Coming Soon</p>
      <p className="text-gray-600 text-xs mt-1">Building something awesome…</p>
    </div>
  )
}

export default function Projects() {
  const placeholderCount = Math.max(0, 3 - projects.length)

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cobalt-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">What I've built</p>
          <h2 className="section-title text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">A showcase of my work and experiments</p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cobalt-500 rounded-full mx-auto -mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <ComingSoon key={i} index={projects.length + i} />
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-center text-gray-600 text-sm mt-8">
            Projects are being added. Check back soon or{' '}
            <a href="https://github.com/Adityasingh909" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
              visit my GitHub
            </a>
            .
          </p>
        )}

        <div className="text-center mt-12">
          <a
            href="https://github.com/Adityasingh909"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={16} />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
