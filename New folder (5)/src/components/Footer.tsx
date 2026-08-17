export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative w-full border-t border-[#173318] bg-black px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono-alt text-xs text-[#c9ffce]/50 sm:flex-row">
        <div>
          <span className="text-[#39ff14]">root@vieursopy</span>
          <span className="text-[#c9ffce]/40">:~$</span> echo "© {year} vieursopy.lol — all rights
          reserved"
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#39ff14]" />
          system status: online
        </div>
      </div>
    </footer>
  );
}
