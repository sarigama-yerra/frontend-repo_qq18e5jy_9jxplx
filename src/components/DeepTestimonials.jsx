export default function DeepTestimonials() {
  const quotes = [
    { name: "Ivan", text: "Alfa Kod mi je otvorio oči i probudio me kad nisam znao gde udaram. Kompas za ljubav i život. Čista desetka." },
    { name: "Marko", text: "Tek sad sam shvatio koliko sam grešio. Poruke tipa 'Hej, kako si?' su me sahranjivale. Sada znam šta prolazi." },
    { name: "Pavle", text: "Digitalni Romeo i Alfa Kod su mi dali uvide, a Umetnost Manipulacije – pravu prirodu ljudi. Vredi svaki dinar." },
  ];

  return (
    <section className="py-14" id="utisci-duboko">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Utisci – pročitaj pre nego odlučiš</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-blue-100/90">“{q.text}”</p>
              <div className="mt-4 text-sm text-blue-300/80">{q.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
