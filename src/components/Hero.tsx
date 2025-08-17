import { Button } from "@/components/ui/button";
import { ArrowRight, Award, MapPin, Building2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background with geometric shapes inspired by logo */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-secondary-muted">
        <div className="absolute top-20 left-10 w-32 h-32 gradient-primary opacity-10 transform rotate-45 rounded-lg animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 gradient-secondary opacity-20 transform -rotate-12 rounded-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 gradient-primary opacity-15 transform rotate-12 rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <Award className="w-4 h-4 mr-2" />
              IAAPA Brass Ring Award Winner 2024
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Award-Winning Technology
            <br />
            <span className="text-gradient">Solutions for Attractions</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Powering exceptional guest experiences at amusement parks, FECs, water parks, and attractions worldwide with integrated technology solutions that drive revenue and operational excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="gradient-primary text-white border-0 shadow-brand animate-pulse-glow group">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View Solutions
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="flex items-center justify-center mb-2">
                <Building2 className="w-6 h-6 text-primary mr-2" />
                <div className="text-3xl font-bold text-gradient">2,800+</div>
              </div>
              <p className="text-sm text-muted-foreground">Sites Worldwide</p>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-primary mr-2" />
                <div className="text-3xl font-bold text-gradient">60+</div>
              </div>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
            <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-primary mr-2" />
                <div className="text-3xl font-bold text-gradient">15+</div>
              </div>
              <p className="text-sm text-muted-foreground">Industry Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;