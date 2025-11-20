export default function BigCTA({ onClick }) {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Klikni i preuzmi svoj Arsenal</h2>
        <p className="mt-3 text-blue-200/90">Stiže ti sve na email – čitaš sa telefona</p>
        <button onClick={onClick} className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold shadow-lg shadow-red-600/30 hover:from-red-500 hover:to-rose-500 transition">
          KLIKNI i preuzmi svoj Arsenal
        </button>
      </div>
    </section>
  );
}
