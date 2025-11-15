import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! I will get back to you soon.')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white/70 p-8 backdrop-blur">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-2 text-slate-600">Let’s build something fun together.</p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3">
                <Mail size={16} className="text-slate-400" />
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="you@domain.com" className="w-full py-3 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea value={message} onChange={(e)=>setMessage(e.target.value)} required rows={4} placeholder="Tell me about your idea..." className="mt-1 w-full rounded-xl border border-slate-200 bg-white p-3 outline-none" />
            </div>
            <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700">
              <Send size={16} /> Send
            </button>
            {status && <p className="text-emerald-600 text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
