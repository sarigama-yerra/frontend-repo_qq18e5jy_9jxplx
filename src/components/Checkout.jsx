import { useMemo, useState } from 'react'

const PACKAGES = {
  alfa: { name: 'ALFA ARSENAL', price: 37 },
  zver: { name: 'KOD ZVER ARSENAL', price: 47 },
  komplet: { name: 'KOMPLETAN ARSENAL', price: 57 },
}

export default function Checkout({ defaultPackage = 'alfa', onSubmitted }) {
  const [selected, setSelected] = useState(defaultPackage)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const pkg = useMemo(() => PACKAGES[selected], [selected])

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: name,
          email,
          selected_package: selected,
          price_eur: pkg.price,
          notes,
        })
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Greška pri slanju porudžbine')
      setStatus({ type: 'success', message: 'Rezervisano! Proveri email za dalje korake.' })
      onSubmitted && onSubmitted(data.order_id)
      setName(''); setEmail(''); setNotes('')
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl md:text-2xl font-bold text-white text-center">Rezerviši svoj Arsenal</h3>
          <p className="mt-1 text-center text-blue-200/80">Stiže odmah na email – plaćanje naknadno po uputstvu</p>

          <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={submit}>
            <div className="md:col-span-2 grid grid-cols-3 gap-2">
              {Object.entries(PACKAGES).map(([key, p]) => (
                <button type="button" key={key} onClick={() => setSelected(key)} className={`rounded-xl border px-3 py-2 text-sm font-semibold transition ${selected === key ? 'border-white/40 bg-white/10 text-white' : 'border-white/10 bg-white/5 text-blue-100/90'}`}>
                  {p.name}
                  <div className="text-xs text-blue-300/80">€{p.price}</div>
                </button>
              ))}
            </div>
            <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-blue-300/80">Ime i prezime</label>
                <input value={name} onChange={e=>setName(e.target.value)} required className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white outline-none focus:border-white/30" placeholder="Npr. Marko Marković" />
              </div>
              <div>
                <label className="text-xs text-blue-300/80">Email</label>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white outline-none focus:border-white/30" placeholder="tvoj@email.com" />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="text-xs text-blue-300/80">Napomena (opciono)</label>
              <textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={3} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white outline-none focus:border-white/30" placeholder="Ako imaš specifična pitanja, napiši ovde" />
            </div>
            <div className="md:col-span-2">
              <button disabled={loading} className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold py-3 hover:opacity-95 transition">
                {loading ? 'Slanje...' : `Rezerviši (${pkg.name} – €${pkg.price})`}
              </button>
            </div>
          </form>

          {status && (
            <div className={`mt-4 rounded-lg p-3 text-sm ${status.type==='success' ? 'bg-emerald-500/10 text-emerald-200 border border-emerald-400/20' : 'bg-red-500/10 text-red-200 border border-red-400/20'}`}>
              {status.message}
            </div>
          )}
          <p className="mt-3 text-[11px] text-blue-300/70 text-center">Ograničena ponuda – samo nekoliko mesta. Nakon rezervacije dobijaš email sa uputstvima za plaćanje i pristup.</p>
        </div>
      </div>
    </section>
  )
}
