import { Flame, Shield, Zap } from "lucide-react";

export default function Hero({ onPrimaryClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(239,68,68,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.15),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(234,179,8,0.12),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-blue-200/80 mb-6">
              <Flame className="w-4 h-4 text-red-400" />
              <span>Promo ponuda aktivna – ograničeno vreme</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Od neprimećenog lika do lika kojeg svi gledaju. Preokreni igru. Zauvek.
            </h1>
            <p className="mt-6 text-lg text-blue-200/90 leading-relaxed">
              Znaš u dubini sebe da nisi "onaj pravi" za nju? Nisi ti problem – nego program. 
              Razveži kočnice, probudi Zver i postani muškarac koga ne može da izbaci iz glave.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={onPrimaryClick} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold shadow-lg shadow-red-600/30 hover:from-red-500 hover:to-rose-500 transition">
                <Zap className="w-5 h-5" />
                PREUZMI SVOJ ARSENAL
              </button>
              <a href="#ponude" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/15 text-blue-100 hover:bg-white/5 transition">
                Pogledaj ponude
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-blue-300/70">
              <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-400"/> 500+ muškaraca prošlo program</div>
              <div className="flex items-center gap-2"><Flame className="w-4 h-4 text-orange-400"/> Rezultati koji se osećaju</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-red-500/10 via-fuchsia-500/10 to-amber-400/10 rounded-3xl blur-2xl" />
            <div className="relative aspect-[4/5] rounded-3xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_40%)]" />
              <div className="h-full w-full flex items-end">
                <div className="p-6 w-full">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      { k: "ALFA KOD", v: "BUĐENJE" },
                      { k: "DIGITALNI", v: "ROMEO" },
                      { k: "UMETNOST", v: "MANIPULACIJE" },
                    ].map((i) => (
                      <div key={i.k} className="rounded-lg bg-white/5 border border-white/10 p-3">
                        <div className="text-[10px] tracking-widest text-blue-300/70">{i.k}</div>
                        <div className="text-sm font-semibold text-white">{i.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
