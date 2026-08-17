import { Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiTelegram,
  SiTiktok,
  SiTwitch,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import type { IconType } from "@icons-pack/react-simple-icons";

type LinkItem = {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon | IconType;
  accent: string;
};

const LINKS: LinkItem[] = [
  { label: "Instagram", handle: "@vieursopy", href: "#", icon: SiInstagram, accent: "#ff1f3d" },
  { label: "YouTube", handle: "Fight camp + build logs", href: "#", icon: SiYoutube, accent: "#39ff14" },
  { label: "X / Twitter", handle: "@vieursopy", href: "#", icon: SiX, accent: "#39ff14" },
  { label: "TikTok", handle: "training clips & lab clips", href: "#", icon: SiTiktok, accent: "#ff1f3d" },
  { label: "GitHub", handle: "mechatronics & code", href: "#", icon: SiGithub, accent: "#39ff14" },
  { label: "Discord", handle: "join the server", href: "#", icon: SiDiscord, accent: "#ff1f3d" },
  { label: "Twitch", handle: "live builds / training", href: "#", icon: SiTwitch, accent: "#39ff14" },
  { label: "Telegram", handle: "direct line", href: "#", icon: SiTelegram, accent: "#ff1f3d" },
  { label: "Email", handle: "contact@vieursopy.lol", href: "mailto:contact@vieursopy.lol", icon: Mail, accent: "#39ff14" },
];

export default function Links() {
  return (
    <section id="links" className="relative w-full border-t border-[#173318] bg-black px-6 py-24">
      <div className="circuit-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-3 flex items-center gap-3 font-mono-alt text-xs uppercase tracking-[0.35em] text-[#39ff14]/70">
          <span className="h-px w-8 bg-[#39ff14]/50" />
          ./links — ls -la ~/socials
        </div>
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-[#eafff0] sm:text-4xl">
          Establish <span className="text-[#ff1f3d]">Connection</span>
        </h2>
        <p className="mt-4 max-w-xl font-mono-alt text-sm text-[#c9ffce]/70">
          Pick a channel. Training footage, build logs, hot takes and the occasional system failure —
          all archived below.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {LINKS.map(({ label, handle, href, icon: Icon, accent }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group relative flex items-center gap-4 overflow-hidden border border-[#173318] bg-[#050805] px-5 py-4 transition hover:-translate-y-0.5 hover:border-current"
              style={{ color: accent }}
            >
              <span
                className="absolute inset-y-0 left-0 w-0 bg-current opacity-10 transition-all duration-300 group-hover:w-full"
              />
              <div
                className="relative flex h-10 w-10 shrink-0 items-center justify-center border border-current"
              >
                <Icon size={18} />
              </div>
              <div className="relative flex flex-col">
                <span className="font-display text-sm font-bold uppercase tracking-widest text-[#eafff0]">
                  {label}
                </span>
                <span className="font-mono-alt text-xs text-[#c9ffce]/60">{handle}</span>
              </div>
              <span className="relative ml-auto font-mono-alt text-xs opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100">
                &gt;&gt;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
