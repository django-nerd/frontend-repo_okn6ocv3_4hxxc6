import { Menu, Github, Twitter, Linkedin } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/60 dark:bg-black/40 border border-white/30 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <div onClick={() => scrollTo('home')} className="cursor-pointer select-none">
              <div className="text-xs tracking-widest uppercase text-slate-600">Portfolio</div>
              <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Web3 Enthusiast
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <button onClick={() => scrollTo('projects')} className="hover:text-indigo-600 transition-colors">Projects</button>
              <button onClick={() => scrollTo('about')} className="hover:text-indigo-600 transition-colors">About</button>
              <button onClick={() => scrollTo('contact')} className="hover:text-indigo-600 transition-colors">Contact</button>
              <div className="h-6 w-px bg-slate-200" />
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600"><Github size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600"><Twitter size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600"><Linkedin size={18} /></a>
            </nav>
            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-sm hover:bg-white">
              <Menu size={20} />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4 flex flex-col gap-3 border-t border-white/40">
              <button onClick={() => scrollTo('projects')} className="py-2 text-left">Projects</button>
              <button onClick={() => scrollTo('about')} className="py-2 text-left">About</button>
              <button onClick={() => scrollTo('contact')} className="py-2 text-left">Contact</button>
              <div className="flex gap-4 pt-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600"><Github size={18} /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600"><Twitter size={18} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600"><Linkedin size={18} /></a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
