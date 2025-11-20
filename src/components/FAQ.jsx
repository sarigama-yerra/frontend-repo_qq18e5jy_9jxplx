export default function FAQ() {
  const faqs = [
    {
      q: "Jesu li knjige u štampanom ili digitalnom formatu?",
      a: "Digitalni formati – odmah dobijaš pristup preko emaila i možeš čitati na telefonu.",
    },
    {
      q: "Kako mogu da izvršim uplatu ako nemam karticu?",
      a: "Podržavamo više metoda plaćanja. Nakon klika na dugme, izaberi opciju koja ti odgovara i prati uputstva.",
    },
    {
      q: "Mogu li da naručim preko poruke?",
      a: "Preporučujemo narudžbinu preko forme zbog sigurnosti i brzog pristupa. Ako zapne, kontakt podrška ti je dostupna.",
    },
    {
      q: "Koji vodiči su uključeni u ponudu?",
      a: "U zavisnosti od paketa – ALFA KOD, Digitalni Romeo, Umetnost Manipulacije, Operacija Fatal 7, Kod Seksualne Zveri, Tajni Kod Opsesije, i bonusi.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Često postavljana pitanja</h2>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          {faqs.map((f, i) => (
            <details key={i} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left">
                <span className="font-medium text-blue-100">{f.q}</span>
                <span className="text-blue-300/70 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="px-5 pb-5 text-blue-200/90 text-sm">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
