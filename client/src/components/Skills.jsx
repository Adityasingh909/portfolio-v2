import { useScrollAnimation } from '../hooks/useScrollAnimation'

const skillGroups = [
  {
    category: 'Programming',
    color: 'from-violet-500 to-purple-600',
    glow: 'hover:shadow-violet-500/20',
    skills: [
      { name: 'C', level: 'Intermediate', pct: 65 },
      { name: 'C++', level: 'Basic', pct: 45 },
      { name: 'Python', level: 'Intermediate', pct: 60 },
      { name: 'DSA', level: 'Basic', pct: 40 },
    ],
  },
  {
    category: 'Frontend',
    color: 'from-cobalt-500 to-blue-600',
    glow: 'hover:shadow-cobalt-500/20',
    skills: [
      { name: 'HTML', level: 'Intermediate', pct: 70 },
      { name: 'CSS', level: 'Intermediate', pct: 65 },
      { name: 'React', level: 'Learning', pct: 35 },
      { name: 'Tailwind CSS', level: 'Learning', pct: 40 },
    ],
  },
  {
    category: 'Tools & Design',
    color: 'from-pink-500 to-violet-600',
    glow: 'hover:shadow-pink-500/20',
    skills: [
      { name: 'GitHub', level: 'Intermediate', pct: 60 },
      { name: 'Figma', level: 'Basic', pct: 35 },
      { name: 'VS Code', level: 'Intermediate', pct: 70 },
    ],
  },
]

const levelColors = {
  Intermediate: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
  Basic: 'text-cobalt-400 bg-cobalt-500/10 border-cobalt-500/30',
  Learning: 'text-pink-400 bg-pink-500/10 border-pink-500/30',
}

function SkillCard({ skill, gradient, delay }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`glass rounded-xl p-5 border border-white/5 hover:border-white/15 transition-all duration-500 hover:shadow-lg group cursor-default ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: '600ms' }}
    >
      {/* Icon */}
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </div>

      <h4 className="font-semibold text-white text-sm mb-1">{skill.name}</h4>
      <span className={`inline-block text-xs px-2.5 py-0.5 rounded-full border font-medium mb-3 ${levelColors[skill.level]}`}>
        {skill.level}
      </span>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000`}
          style={{ width: isVisible ? `${skill.pct}%` : '0%', transitionDelay: `${delay + 200}ms` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">What I know</p>
          <h2 className="section-title text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cobalt-500 rounded-full mx-auto -mt-6" />
        </div>

        <div className="space-y-12">
          {skillGroups.map((group, gi) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${group.color}`} />
                <h3 className="font-display font-semibold text-white text-lg">{group.category}</h3>
                <div className="flex-1 h-px bg-white/5" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.skills.map((skill, si) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    gradient={group.color}
                    delay={gi * 100 + si * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
