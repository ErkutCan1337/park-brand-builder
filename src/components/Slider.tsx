import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react";
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
      description: "Powering exceptional guest experiences with integrated technology that drives revenue and operational excellence.",
      cta: "Watch Demo",
      ctaSecondary: "Learn More",
      image: heroImage,
      overlay: "from-black/70 via-black/50 to-transparent"
    },
    {
      id: 2,
      title: "Transform Your FEC Operations",
      subtitle: "Complete Management Platform",
      description: "From game card management to party bookings, streamline every aspect of your family entertainment center with our comprehensive solution.",
      cta: "Explore Solutions",
      ctaSecondary: "View Case Study",
      image: fecImage,
      overlay: "from-primary-deep/80 via-primary/60 to-transparent"
    },
    {
      id: 3,
      title: "Scale with Confidence",
      subtitle: "Modular Platform Design",
      description: "Deploy solutions independently or as an integrated platform. Start small and grow with modules that adapt to your unique business needs.",
      cta: "Get Started",
      ctaSecondary: "Book Consultation",
      image: outdoorImage,
      overlay: "from-secondary/80 via-primary-glow/60 to-transparent"
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
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 
            'opacity-0 scale-105'
          }`}
        >
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0">
            <img 
              src={slide.image} 
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                index === currentSlide ? 'scale-100' : 'scale-110'
              }`}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}></div>
          </div>

          {/* Content - Squarespace Style */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                {/* Animated Badge */}
                <div className="mb-6 transform transition-all duration-700 delay-300">
                  <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm font-medium border border-white/30 shadow-lg">
                    {slide.subtitle}
                  </span>
                </div>
                
                {/* Main Title - Squarespace Typography */}
                <h1 className="text-5xl md:text-7xl font-display font-light text-white mb-6 leading-tight tracking-tight transform transition-all duration-700 delay-500">
                  {slide.title}
                </h1>
                
                {/* Description */}
                <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light max-w-xl transform transition-all duration-700 delay-700">
                  {slide.description}
                </p>
                
                {/* CTA Buttons - Squarespace Style */}
                <div className="flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-900">
                  <Button size="lg" className="bg-white text-foreground hover:bg-white/90 shadow-xl border-0 px-8 py-4 text-lg font-medium">
                    <Play className="mr-2 h-5 w-5" />
                    {slide.cta}
                  </Button>
                  <Button size="lg" variant="ghost" className="text-white border-2 border-white/50 hover:bg-white/10 hover:border-white px-8 py-4 text-lg font-medium">
                    {slide.ctaSecondary}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Minimal Navigation - Squarespace Style */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 backdrop-blur border border-white/20"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 backdrop-blur border border-white/20"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators - Modern Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'bg-white shadow-lg' 
                : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/60 text-sm font-light tracking-wide">
        SCROLL TO EXPLORE
      </div>
    </section>
  );
};

export default Slider;