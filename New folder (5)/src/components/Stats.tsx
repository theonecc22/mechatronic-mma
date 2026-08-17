const STATS = [
  { label: "Wins", value: "—", suffix: "W" },
  { label: "Discipline", value: "MMA", suffix: "" },
  { label: "Focus", value: "MECHATRONICS", suffix: "" },
  { label: "Uptime", value: "24/7", suffix: "" },
];

const BARS = [
  { label: "Striking", value: 82 },
  { label: "Grappling", value: 74 },
  { label: "Cardio", value: 88 },
  { label: "Embedded Systems", value: 90 },
  { label: "Robotics / CAD", value: 85 },
  { label: "Discipline", value: 99 },
];

export default function Stats() {
  return (
    <section id="stats" className="relative w-full border-t border-[#173318] bg-[#040504] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 flex items-center gap-3 font-mono-alt text-xs uppercase tracking-[0.35em] text-[#39ff14]/70">
          <span className="h-px w-8 bg-[#39ff14]/50" />
          ./system — status --verbose
        </div>
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-[#eafff0] sm:text-4xl">
          Fight Card <span className="text-[#ff1f3d]">&amp;</span> System Specs
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="hud-corners border border-[#39ff14]/25 bg-black/60 px-4 py-6 text-center"
            >
              <div className="font-display text-xl font-bold text-[#39ff14] sm:text-2xl">
                {s.value}
                <span className="text-[#ff1f3d]">{s.suffix}</span>
              </div>
              <div className="mt-1 font-mono-alt text-[10px] uppercase tracking-widest text-[#c9ffce]/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {BARS.map((b) => (
            <div key={b.label}>
              <div className="mb-2 flex justify-between font-mono-alt text-xs uppercase tracking-widest text-[#c9ffce]/70">
                <span>{b.label}</span>
                <span className="text-[#39ff14]">{b.value}%</span>
              </div>
              <div className="h-2 w-full border border-[#173318] bg-black">
                <div
                  className="h-full bg-gradient-to-r from-[#39ff14] to-[#ff1f3d]"
                  style={{ width: `${b.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
