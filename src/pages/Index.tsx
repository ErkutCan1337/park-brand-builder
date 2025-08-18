import Header from "@/components/Header";
import Slider from "@/components/Slider";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Slider />
        <Solutions />
        <About />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;