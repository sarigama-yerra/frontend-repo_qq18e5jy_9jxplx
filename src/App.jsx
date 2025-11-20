import { useMemo, useRef, useState } from 'react'
import Hero from './components/Hero'
import Offers from './components/Offers'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import Story from './components/Story'
import PackagesDeep from './components/PackagesDeep'
import WhyNow from './components/WhyNow'
import BigCTA from './components/BigCTA'
import DeepTestimonials from './components/DeepTestimonials'
import Countdown from './components/Countdown'
import MiniCTA from './components/MiniCTA'
import Checkout from './components/Checkout'

function App() {
  const offersRef = useRef(null)
  const checkoutRef = useRef(null)
  const scrollToOffers = () => {
    offersRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const scrollToCheckout = () => {
    checkoutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Deadline in ~3 days
  const deadline = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + 3)
    d.setHours(23, 59, 59, 0)
    return d.toISOString()
  }, [])

  const [lastOrderId, setLastOrderId] = useState(null)

  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      {/* Top gradient + subtle grid */}
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(244,63,94,0.12),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(234,179,8,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Nav */}
      <header className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 shadow-lg shadow-red-600/30" />
            <span className="font-semibold tracking-wide text-white">Gospodin Fatal</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#ponude" className="hover:text-white/90">Ponude</a>
            <a href="#utisci" className="hover:text-white/90">Utisci</a>
            <a href="#faq" className="hover:text-white/90">FAQ</a>
            <button onClick={scrollToOffers} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white">Preuzmi</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="max-w-6xl mx-auto px-6 pt-4">
          <Countdown deadline={deadline} />
        </section>
        <Hero onPrimaryClick={scrollToOffers} />

        {/* Long-form narrative */}
        <Story />
        <section className="max-w-6xl mx-auto px-6"><MiniCTA onClick={scrollToOffers} /></section>

        {/* Pain bullets section */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: 'MEDIOKRITET',
                d: 'Postao si predvidljiv. Svet žudi za opasnim muškarcima.'
              },
              {
                t: 'MODERNA LAŽ',
                d: 'Utišali su Zver u tebi. Vreme je da vratiš dominaciju.'
              },
              {
                t: 'UNUTRAŠNJI SABOTER',
                d: 'Strah od odbijanja te drži u zatvoru. Razvali brave.'
              }
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-[11px] tracking-widest text-blue-300/70">{b.t}</div>
                <div className="mt-1 font-semibold text-white">{b.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Offers */}
        <div ref={offersRef}>
          <Offers />
        </div>
        <section className="max-w-6xl mx-auto px-6 -mt-4"><MiniCTA onClick={scrollToCheckout} label="REZERVIŠI – par mesta preostalo" color="from-emerald-600 to-green-600" /></section>

        {/* Deep packages breakdown */}
        <PackagesDeep />
        <section className="max-w-6xl mx-auto px-6 -mt-6"><MiniCTA onClick={scrollToCheckout} label="REZERVIŠI SVOJ PAKET" /></section>

        {/* Social proof headline */}
        <section id="utisci" className="max-w-5xl mx-auto px-6 pt-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white">500+ muškaraca je već prošlo kroz program</h3>
            <p className="mt-2 text-blue-200/85">Ne učiš šta da kažeš – učiš ko da postaneš.</p>
          </div>
        </section>

        <Testimonials />
        <DeepTestimonials />
        <section className="max-w-6xl mx-auto px-6 -mt-6"><MiniCTA onClick={scrollToCheckout} label="UZMI SVOJ ARSENAL – SADA" /></section>

        {/* Why now section */}
        <WhyNow />
        <section className="max-w-6xl mx-auto px-6 -mt-6"><MiniCTA onClick={scrollToCheckout} label="PROMO VREME ISTIČE – REZERVIŠI" color="from-fuchsia-600 to-violet-600" /></section>

        {/* FAQ */}
        <div id="faq">
          <FAQ />
        </div>

        {/* Checkout form */}
        <div ref={checkoutRef}>
          <Checkout onSubmitted={setLastOrderId} />
        </div>

        {/* Big CTA */}
        <BigCTA onClick={scrollToCheckout} />

        {lastOrderId && (
          <section className="max-w-4xl mx-auto px-6 pb-12 -mt-6">
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-emerald-200 text-sm text-center">
              Rezervacija uspešna. ID: {lastOrderId}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-300/70">Copyrights 2025. | Gospodin Fatal™ | Terms & Conditions</p>
          <a href="#ponude" className="text-sm text-blue-200/90 hover:text-white">Specijalna ponuda aktivna</a>
        </div>
      </footer>
    </div>
  )
}

export default App
