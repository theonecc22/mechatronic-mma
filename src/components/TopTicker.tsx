const ITEMS = [
  "SYSTEM ONLINE",
  "FIGHTER.EXE RUNNING",
  "MECHATRONICS_CORE v3.2 LOADED",
  "RECORD: TRACKING",
  "NO SURRENDER",
  "BUILD // BREAK // REBUILD",
  "STATUS: ACTIVE",
];

export default function TopTicker() {
  const line = ITEMS.join("   //   ") + "   //   ";
  return (
    <div className="w-full overflow-hidden border-b border-[#173318] bg-black/80 py-1.5 text-[11px] tracking-widest text-[#39ff14]/80">
      <div className="ticker-track flex w-max whitespace-nowrap font-mono-alt">
        <span className="pr-4">{line}</span>
        <span className="pr-4">{line}</span>
      </div>
    </div>
  );
}
