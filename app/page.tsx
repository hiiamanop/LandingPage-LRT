import Image from "next/image";
import Hero from "@/components/home/Hero"
import AppPromo from "@/components/home/AppPromo"
import AboutLRT from "@/components/home/AboutLRT"
import Features from "@/components/home/Features"
import NewsSection from "@/components/home/NewsSection"
import FAQSection from "@/components/home/FAQSection"


export default function Home() {
  return (
    <main>
      {/* Section Hero untuk menguji navbar transparan */}
      <Hero />
      <AppPromo />
      <AboutLRT />
      <Features />
      <NewsSection />
      <FAQSection />
    </main>
  )
}