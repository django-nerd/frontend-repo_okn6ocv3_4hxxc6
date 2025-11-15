import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'On-chain Dashboard',
    desc: 'Real-time wallet analytics with smooth motion and glass UI.',
    tags: ['React', 'Tailwind', 'Ethers.js'],
    link: '#',
    repo: '#'
  },
  {
    title: 'NFT Drop Site',
    desc: 'Mint page with allowlist, reveal flow, and playful interactions.',
    tags: ['Next.js', 'Framer Motion', 'Smart Contracts'],
    link: '#',
    repo: '#'
  },
  {
    title: 'DAO Voting Portal',
    desc: 'Simple governance UI connecting to on-chain proposals.',
    tags: ['Vite', 'RainbowKit', 'wagmi'],
    link: '#',
    repo: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Selected Projects</h2>
        <p className="text-slate-600 mt-2">A few things I built and loved.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group rounded-2xl border border-slate-200 bg-white/70 backdrop-blur hover:border-indigo-300 transition-colors shadow-sm">
              <div className="p-6">
                <div className="h-40 rounded-xl bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center">
                  <span className="text-6xl">🚀</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="text-xs rounded-full border border-slate-200 bg-white/70 px-2 py-1">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-4">
                  <a href={p.link} className="inline-flex items-center gap-1 text-indigo-600 hover:underline"><ExternalLink size={16}/> Live</a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-slate-700 hover:underline"><Github size={16}/> Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
