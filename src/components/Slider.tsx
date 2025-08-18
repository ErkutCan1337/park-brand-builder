import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-control-room.jpg";
import fecImage from "@/assets/fec-experience.jpg";
import outdoorImage from "@/assets/outdoor-park.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Award-Winning Technology Solutions",
      subtitle: "IAAPA Brass Ring Award Winner 2024",
      description: "Powering exceptional guest experiences at 2,800+ locations worldwide with integrated technology that drives revenue and operational excellence.",
      cta: "Request Demo",
      image: heroImage,
      gradient: "from-blue-900/90 via-blue-800/85 to-blue-700/80"
    },
    {
      id: 2,
      title: "Transform Your FEC Operations",
      subtitle: "Complete Management Platform",
      description: "From game card management to party bookings, streamline every aspect of your family entertainment center with our comprehensive solution.",
      cta: "View FEC Solutions",
      image: fecImage,
      gradient: "from-purple-900/90 via-purple-800/85 to-purple-700/80"
    },
    {
      id: 3,
      title: "Scale with Confidence",
      subtitle: "Modular Platform Design",
      description: "Deploy solutions independently or as an integrated platform. Start small and grow with modules that adapt to your unique business needs.",
      cta: "Explore Modules",
      image: outdoorImage,
      gradient: "from-green-900/90 via-green-800/85 to-green-700/80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20">
                    {slide.subtitle}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                
                <Button size="lg" className="gradient-primary text-white border-0 shadow-brand group">
                  {slide.cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 h-12 w-12"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 h-12 w-12"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;