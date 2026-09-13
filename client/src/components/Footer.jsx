import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/Adityasingh909', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/aditya-singh-computer-eng/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:adityasingh917023@gmail.com', label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
          <span>Built with</span>
          <Heart size={13} className="text-violet-500 fill-violet-500" />
          <span>by</span>
          <span className="text-gradient font-semibold">Aditya Singh</span>
          <span>· {year}</span>
        </div>

        <div className="flex items-center gap-1">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-violet-400 transition-colors rounded-lg hover:bg-white/5"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
