import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Activites from "@/components/Activites";
import Contact from "@/components/Contact";
import Inscription from "@/components/Inscription";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Activites />
      </main>
      <Contact />
      <Inscription />
    </>
  );
}
