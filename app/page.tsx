import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Collections from "./components/Collections";
import BestSellers from "./components/BestSellers";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0F1115] min-h-screen selection:bg-[#C8A96B] selection:text-black">
      <Navbar />
      <Hero />
      <Stats />
      <Collections />
      <BestSellers />
      <WhyChooseUs />
      <ContactForm />
      <Footer />
    </main>
  );
}