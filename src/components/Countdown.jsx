import { useEffect, useMemo, useState } from 'react'

export default function Countdown({ deadline, label = "Promo ističe za" }) {
  const target = useMemo(() => new Date(deadline).getTime(), [deadline])
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = Math.max(0, target - now)
  const totalSeconds = Math.floor(diff / 1000)
  const d = Math.floor(totalSeconds / 86400)
  const h = Math.floor((totalSeconds % 86400) / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
        <div className="text-xs uppercase tracking-widest text-blue-300/80">{label}</div>
        <div className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
          {d > 0 && <span className="mr-2">{pad(d)}d</span>}
          <span>{pad(h)}:{pad(m)}:{pad(s)}</span>
        </div>
        <div className="mt-1 text-[11px] text-blue-300/70">Specijalna cena aktivna dok tajmer otkucava</div>
      </div>
    </div>
  )
}
