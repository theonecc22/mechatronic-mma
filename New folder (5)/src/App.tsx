import TopTicker from "./components/TopTicker";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Links from "./components/Links";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="scanlines noise-vignette relative min-h-screen w-full bg-black text-[#eafff0] selection:bg-[#39ff14] selection:text-black">
      <TopTicker />
      <Hero />
      <About />
      <Stats />
      <Links />
      <Footer />
    </div>
  );
}
