import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main className="pt-28">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <footer className="py-12 text-center text-sm text-slate-500">© {new Date().getFullYear()} Web3 Enthusiast. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
