export default function MiniCTA({ onClick, color = "from-red-600 to-rose-600", label = "KLIKNI i preuzmi svoj Arsenal" }) {
  return (
    <div className="mt-8 text-center">
      <button onClick={onClick} className={`inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r ${color} text-white font-semibold shadow-lg/30 hover:opacity-95 transition`}>
        {label}
      </button>
    </div>
  )
}
