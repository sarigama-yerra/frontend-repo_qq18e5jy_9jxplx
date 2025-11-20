export default function Testimonials() {
  const items = [
    {
      name: "Nemanja S.", age: 29,
      quote: "Mislio sam da je problem u meni. ALFA KOD mi je pokazao mindset i strategiju. KOD ZVER je kao cheat code. Više energije i uspeha sa ženama.",
    },
    {
      name: "Marko P.", age: 28,
      quote: "'Tajni Kod Opsesije' mi je otvorio oči. Reakcije žena su se potpuno promenile. Kao supermoći.",
    },
    {
      name: "Stefan M.", age: 29,
      quote: "'Kod Seksualne Zveri' je drugi nivo. Samopouzdanje u krevetu otišlo u nebesa. Reakcije – nezaboravne.",
    },
    {
      name: "Aleksandar V.", age: 33,
      quote: "Operacija Fatal 7 je vojni priručnik za osvajanje. Bez uvijanja, čista strategija. Rezultati su tu.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Utisci</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-blue-100/90">“{t.quote}”</p>
              <div className="mt-4 text-sm text-blue-300/80">{t.name} | {t.age}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
