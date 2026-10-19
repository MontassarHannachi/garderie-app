import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <footer id="contact" className="py-4 text-center bg-warning-subtle">
        <p className="mb-0">📞 +216 00 000 000 — contact@petitssoleils.tn</p>
      </footer>
    </>
  );
}
