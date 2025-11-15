export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white/70 p-8 backdrop-blur">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="mt-4 text-slate-700">
            I’m a web3 enthusiast focused on crafting delightful frontends for decentralized apps. I love combining 3D, motion, and crisp UI with solid engineering.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
            <li className="rounded-xl border border-slate-200 bg-white p-4">• React, Next.js, Vite</li>
            <li className="rounded-xl border border-slate-200 bg-white p-4">• Tailwind, Framer Motion, 3D Spline</li>
            <li className="rounded-xl border border-slate-200 bg-white p-4">• Ethers.js, wagmi, wallet integrations</li>
            <li className="rounded-xl border border-slate-200 bg-white p-4">• Design systems, accessibility, performance</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
