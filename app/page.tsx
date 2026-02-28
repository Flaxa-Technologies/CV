import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Platforms } from "@/components/Platforms";
import { Skills } from "@/components/Skills";
import { Vision } from "@/components/Vision";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full min-h-screen pt-16">
      <Navbar />
      <Hero />
      <About />
      <Platforms />
      <Skills />
      <Vision />
      <Contact />
    </main>
  );
}
