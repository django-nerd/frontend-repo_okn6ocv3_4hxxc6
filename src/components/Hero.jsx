import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/40 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to freelance & collabs
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Web3 Enthusiast</span>
            <br />
            Building playful, interactive experiences
          </h1>
          <p className="mt-5 text-slate-700 max-w-xl">
            I craft modern interfaces and on-chain experiences that blend design, motion, and decentralization.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-colors">View Projects</a>
            <a href="#contact" className="rounded-xl border border-slate-300 bg-white/70 px-5 py-3 text-slate-800 hover:bg-white transition-colors">Get in touch</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  )
}
