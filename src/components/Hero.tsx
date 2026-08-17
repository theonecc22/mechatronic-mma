import { ChevronDown, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] w-full flex-col items-center justify-center overflow-hidden px-6 pt-10 pb-24"
    >
      {/* background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-45"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/70 to-black" />
      <div className="circuit-grid absolute inset-0 -z-10 opacity-60" />

      <div className="hud-corners mb-6 flex items-center gap-2 border border-[#39ff14]/40 bg-black/50 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-[#39ff14]/90 font-mono-alt">
        <Terminal size={13} />
        <span>boot sequence :: identity confirmed</span>
      </div>

      <h1
        data-text="VIEURSOPY"
        className="glitch font-display text-center text-[15vw] font-black leading-[0.9] tracking-tight sm:text-[9vw] md:text-[7.5rem]"
      >
        VIEURSOPY
      </h1>
      <div className="mt-1 font-display text-2xl font-bold tracking-[0.35em] text-[#ff1f3d] sm:text-3xl">
        .LOL
      </div>

      <p className="mt-8 max-w-xl text-center font-mono-alt text-sm text-[#c9ffce]/80 sm:text-base">
        <span className="text-[#39ff14]">root@dojo:~$</span> whoami
        <br />
        <span className="cursor-blink">
          mma fighter // mechatronics engineering student // building machines & breaking limits
        </span>
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#links"
          className="pulse-glow rounded-sm border border-[#39ff14] bg-[#39ff14]/10 px-6 py-3 font-mono-alt text-sm uppercase tracking-widest text-[#39ff14] transition hover:bg-[#39ff14] hover:text-black"
        >
          Access Links
        </a>
        <a
          href="#about"
          className="rounded-sm border border-[#ff1f3d]/60 bg-[#ff1f3d]/5 px-6 py-3 font-mono-alt text-sm uppercase tracking-widest text-[#ff1f3d] transition hover:bg-[#ff1f3d] hover:text-black"
        >
          Read Dossier
        </a>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-1 text-[#39ff14]/60 flicker">
        <span className="font-mono-alt text-[10px] uppercase tracking-[0.3em]">scroll</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
