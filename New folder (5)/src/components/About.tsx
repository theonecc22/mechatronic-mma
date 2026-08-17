import { Cpu, Swords, Wrench, Zap } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3 font-mono-alt text-xs uppercase tracking-[0.35em] text-[#39ff14]/70">
      <span className="h-px w-8 bg-[#39ff14]/50" />
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative w-full border-t border-[#173318] bg-black px-6 py-24">
      <div className="circuit-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-6xl">
        <SectionLabel>./dossier — cat profile.log</SectionLabel>
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-[#eafff0] sm:text-4xl">
          Two Disciplines. <span className="text-[#ff1f3d]">One System.</span>
        </h2>
        <p className="mt-4 max-w-2xl font-mono-alt text-sm leading-relaxed text-[#c9ffce]/70">
          I train the body like a fighter and I engineer systems like a machine — precision, iteration,
          and zero tolerance for weak code or a weak jab.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Fighter card */}
          <div className="hud-corners group relative border border-[#39ff14]/25 bg-[#050805] p-7 transition hover:border-[#ff1f3d]/60">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center border border-[#ff1f3d]/60 bg-[#ff1f3d]/10 text-[#ff1f3d]">
                <Swords size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-widest text-[#eafff0]">
                  Fighter.exe
                </h3>
                <span className="font-mono-alt text-[11px] text-[#39ff14]/60">process: active</span>
              </div>
            </div>
            <p className="mt-5 font-mono-alt text-sm leading-relaxed text-[#c9ffce]/75">
              Competing in Mixed Martial Arts — striking, grappling, and the relentless grind of the gym.
              Every round is a stress test; every scar is a changelog entry.
            </p>
            <ul className="mt-5 space-y-2 font-mono-alt text-xs text-[#c9ffce]/60">
              <li className="flex justify-between border-b border-[#173318] pb-2">
                <span>DISCIPLINE</span>
                <span className="text-[#39ff14]">MMA / STRIKING / GRAPPLING</span>
              </li>
              <li className="flex justify-between border-b border-[#173318] pb-2">
                <span>MODE</span>
                <span className="text-[#39ff14]">IN CAMP</span>
              </li>
              <li className="flex justify-between">
                <span>MANTRA</span>
                <span className="text-[#39ff14]">OUTWORK EVERYONE</span>
              </li>
            </ul>
          </div>

          {/* Engineer card */}
          <div className="hud-corners group relative border border-[#39ff14]/25 bg-[#050805] p-7 transition hover:border-[#39ff14]/70">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center border border-[#39ff14]/60 bg-[#39ff14]/10 text-[#39ff14]">
                <Cpu size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-widest text-[#eafff0]">
                  Engineer.sys
                </h3>
                <span className="font-mono-alt text-[11px] text-[#39ff14]/60">process: compiling</span>
              </div>
            </div>
            <p className="mt-5 font-mono-alt text-sm leading-relaxed text-[#c9ffce]/75">
              Mechatronics engineering student — robotics, embedded systems, control theory, and CAD.
              I build the machines other people are afraid to open up.
            </p>
            <ul className="mt-5 space-y-2 font-mono-alt text-xs text-[#c9ffce]/60">
              <li className="flex justify-between border-b border-[#173318] pb-2">
                <span>STACK</span>
                <span className="text-[#39ff14]">C / C++ / PYTHON / CAD</span>
              </li>
              <li className="flex justify-between border-b border-[#173318] pb-2">
                <span>FIELD</span>
                <span className="text-[#39ff14]">ROBOTICS / EMBEDDED</span>
              </li>
              <li className="flex justify-between">
                <span>MANTRA</span>
                <span className="text-[#39ff14]">BUILD. BREAK. REBUILD.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-3 border border-[#173318] bg-[#050805] px-5 py-4 font-mono-alt text-xs text-[#c9ffce]/70">
            <Wrench size={16} className="shrink-0 text-[#39ff14]" />
            Hands-on with actuators, sensors, PCBs and 3D-printed prototypes.
          </div>
          <div className="flex items-center gap-3 border border-[#173318] bg-[#050805] px-5 py-4 font-mono-alt text-xs text-[#c9ffce]/70">
            <Zap size={16} className="shrink-0 text-[#ff1f3d]" />
            Fueled by discipline, caffeine, and unfinished side projects.
          </div>
        </div>
      </div>
    </section>
  );
}
