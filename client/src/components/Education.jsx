import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'KIET Group of Institutions',
    period: '2025 – 2029',
    grade: 'CGPA: 8.33',
    gradeIcon: Award,
    courses: ['Data Structures & Algorithms', 'Full Stack Development', 'Database Management', 'Software Engineering'],
    accent: 'from-violet-500 to-cobalt-600',
    badge: 'Current',
  },
  {
    degree: 'Higher Secondary (12th)',
    field: 'Science Stream (PCM)',
    institution: 'Maharshi Arvind Vidya Mandir',
    period: '2023 – 2024',
    grade: 'Percentage: 85.66%',
    gradeIcon: Award,
    courses: ['Physics', 'Chemistry', 'Mathematics'],
    accent: 'from-cobalt-500 to-violet-600',
    badge: 'Completed',
  },
]

function EducationCard({ item, index }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="glass rounded-2xl p-8 hover:border-violet-500/30 border border-white/5 transition-all duration-300 group hover:shadow-lg hover:shadow-violet-500/5">
        <div className="flex items-start gap-6">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <GraduationCap size={24} className="text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="font-display text-xl font-bold text-white leading-tight">{item.degree}</h3>
              <span className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${item.accent} text-white`}>
                {item.badge}
              </span>
            </div>

            <p className="text-violet-400 font-semibold text-sm mb-1">{item.field}</p>
            <p className="text-gray-400 font-medium text-sm mb-4">{item.institution}</p>

            <div className="flex flex-wrap gap-4 mb-5 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} className="text-violet-400" />
                {item.period}
              </span>
              <span className="flex items-center gap-1.5">
                <item.gradeIcon size={13} className="text-violet-400" />
                {item.grade}
              </span>
            </div>

            {/* Courses */}
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest mb-3">
                <BookOpen size={11} />
                {item.field.includes('PCM') ? 'Subjects' : 'Relevant Coursework'}
              </div>
              <div className="flex flex-wrap gap-2">
                {item.courses.map(c => (
                  <span key={c} className="px-3 py-1 rounded-lg bg-white/5 text-gray-300 text-xs border border-white/5 hover:border-violet-500/30 transition-colors">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cobalt-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">My background</p>
          <h2 className="section-title text-white">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subtitle">My academic journey and achievements</p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cobalt-500 rounded-full mx-auto -mt-6" />
        </div>

        <div className="flex flex-col gap-6">
          {education.map((item, i) => (
            <EducationCard key={item.degree} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
