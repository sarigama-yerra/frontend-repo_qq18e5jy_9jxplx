export default function Offers() {
  const cards = [
    {
      id: "alfa",
      title: "ALFA ARSENAL",
      subtitle: "Od nevidljivog do lika koji ostavlja trag",
      before: 97,
      promo: 37,
      value: 211,
      bullets: [
        "ALFA KOD – BUĐENJE",
        "DIGITALNI ROMEO",
        "UMETNOST MANIPULACIJE",
      ],
      cta: "POSTANI TAJ LIK",
      color: "from-red-600 to-rose-600",
    },
    {
      id: "zver",
      title: "KOD ZVER ARSENAL",
      subtitle: "Od finih pokušaja do opsesije",
      before: 197,
      promo: 47,
      value: 732,
      bullets: [
        "OPERACIJA FATAL 7",
        "KOD SEKSUALNE ZVERI",
        "TAJNI KOD OPSESIJE",
        "BONUS: ELIXIR PRIMUS",
      ],
      cta: "OSLOBODI ZVER",
      color: "from-fuchsia-600 to-violet-600",
    },
    {
      id: "komplet",
      title: "KOMPLETAN ARSENAL",
      subtitle: "Nema nivoa iznad ovoga",
      before: 294,
      promo: 57,
      value: 943,
      bullets: [
        "Sve iz ALFA i ZVER arsenala",
        "Specijalni bonusi",
        "Pristup sa telefona – odmah na email",
      ],
      cta: "POSTANI LEGENDA",
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section id="ponude" className="relative py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Izaberi nivo i pokreni inicijaciju
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.id} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
              <div className={`absolute -inset-24 bg-gradient-to-br ${c.color} opacity-10 blur-3xl`} />
              <div className="relative">
                <div className="text-xs text-blue-300/70">Vrednost: €{c.value}</div>
                <h3 className="mt-1 text-xl font-bold text-white">{c.title}</h3>
                <p className="text-sm text-blue-200/80">{c.subtitle}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-blue-300/60 line-through text-sm">€{c.before}</span>
                  <span className="text-3xl font-extrabold text-white">€{c.promo}</span>
                  <span className="text-xs text-blue-300/70">danas</span>
                </div>
                <ul className="mt-5 space-y-2 text-blue-100/90 text-sm">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full rounded-xl bg-gradient-to-r ${c.color} text-white font-semibold py-3 hover:opacity-95 transition`}>
                  {c.cta}
                </button>
                <p className="mt-3 text-[11px] text-blue-300/70">Ograničena ponuda – stiže odmah na email, čitaš sa telefona</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
