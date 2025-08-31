import Header from "@/components/Header";
import Slider from "@/components/Slider";
import CoreFeatures from "@/components/CoreFeatures";
import GuestJourney from "@/components/GuestJourney";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Slider />
        <CoreFeatures />
        <GuestJourney />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;