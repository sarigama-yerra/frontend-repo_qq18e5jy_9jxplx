export default function FAQ() {
  const faqs = [
    { q: 'Kako dobijam materijale?', a: 'Sve stiže odmah na email nakon potvrde – možeš da čitaš sa telefona.' },
    { q: 'Da li je ovo za početnike?', a: 'Da. Sistem pokriva temelje i napredne taktike. Ne učiš rečenice – učiš ko postaješ.' },
    { q: 'Da li je anonimno?', a: 'Da. Tvoja privatnost je zaštićena.' },
    { q: 'Koliko traje pristup?', a: 'Doživotno – materijali ostaju tvoji.' },
    { q: 'Koliko mesta ima?', a: 'Malo. Promo je aktivan dok tajmer otkucava i dok ima mesta.' },
  ]
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h3 className="text-2xl md:text-3xl font-bold text-white text-center">FAQ</h3>
      <div className="mt-6 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-xl border border-white/10 bg-white/5 p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between text-white">
              <span className="font-semibold">{f.q}</span>
              <span className="transition group-open:rotate-45 text-blue-300/70">+</span>
            </summary>
            <p className="mt-2 text-blue-200/85">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
