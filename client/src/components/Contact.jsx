import { useState } from 'react'
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import axios from 'axios'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'adityasingh917023@gmail.com',
    href: 'mailto:adityasingh917023@gmail.com',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 92358 76035',
    href: 'tel:+919235876035',
    gradient: 'from-cobalt-500 to-blue-600',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'aditya-singh-computer-eng',
    href: 'https://linkedin.com/in/aditya-singh-computer-eng/',
    gradient: 'from-blue-500 to-cobalt-600',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Adityasingh909',
    href: 'https://github.com/Adityasingh909',
    gradient: 'from-gray-500 to-gray-700',
  },
]

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      await axios.post('/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err?.response?.data?.error || 'Something went wrong. Please try again.')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cobalt-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Get in touch</p>
          <h2 className="section-title text-white">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">I'm always excited to discuss new opportunities and interesting projects</p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cobalt-500 rounded-full mx-auto -mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div
            ref={ref}
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="font-display text-2xl font-bold text-white mb-3">Get In Touch</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Whether you have an opportunity, a project idea, or just want to say hi — my
              inbox is always open. I'll get back to you as soon as possible.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href, gradient }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 hover:border-violet-500/30 transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</p>
                    <p className="text-white text-sm font-medium break-all">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            ref={ref2}
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="glass-strong rounded-2xl p-8 border border-white/8">
              <h3 className="font-display text-xl font-bold text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all duration-300 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all duration-300 text-sm resize-none"
                  />
                </div>

                {/* Status messages */}
                {status === 'success' && (
                  <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 text-green-400 text-sm">
                    <CheckCircle size={16} />
                    Message sent! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
