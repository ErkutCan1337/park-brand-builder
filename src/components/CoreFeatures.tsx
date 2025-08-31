import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Ticket, 
  CreditCard, 
  Monitor,
  Users,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  BarChart3,
  Settings,
  Shield
} from "lucide-react";

const CoreFeatures = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const keyFeatures = [
    {
      icon: Ticket,
      title: "Online Ticketing",
      description: "Flexible, branded ticketing with dynamic pricing and season pass management",
      features: ["Dynamic pricing", "Season passes", "Group booking", "Mobile tickets"],
      color: "from-primary to-primary-glow"
    },
    {
      icon: CreditCard,
      title: "RFID Cashless",
      description: "Seamless cashless payments throughout your venue with advanced analytics",
      features: ["Contactless payments", "Real-time tracking", "Load stations", "Mobile wallet"],
      color: "from-secondary to-primary-glow"
    },
    {
      icon: Monitor,
      title: "Self-Service Kiosks",
      description: "Reduce wait times with intuitive kiosks and improve guest satisfaction",
      features: ["Queue management", "Multi-language", "Accessibility", "Custom branding"],
      color: "from-primary-glow to-secondary"
    },
    {
      icon: Users,
      title: "CRM & Analytics",
      description: "Deep insights into guest behavior and preferences for better decisions",
      features: ["Guest profiles", "Behavior analytics", "Marketing automation", "ROI tracking"],
      color: "from-primary-deep to-primary"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Real-time dashboards and reporting for operational excellence",
      features: ["Live dashboards", "Custom reports", "Predictive analytics", "KPI monitoring"],
      color: "from-secondary to-primary-deep"  
    },
    {
      icon: Settings,
      title: "Integration Hub",
      description: "Connect all your systems with our comprehensive API platform",
      features: ["API access", "Third-party integrations", "Data sync", "Custom workflows"],
      color: "from-primary to-secondary"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with full compliance and data protection",
      features: ["PCI compliance", "Data encryption", "User permissions", "Audit trails"],
      color: "from-primary-deep to-primary-glow"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of card + gap
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Core Platform Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful features that make CRIO the leading technology platform for entertainment venues worldwide.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur shadow-lg border hover:bg-background"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur shadow-lg border hover:bg-background"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Scrollable Features */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="flex-shrink-0 w-80 hover:shadow-elevated transition-all duration-500 group border-0 bg-card/50 backdrop-blur"
                >
                  <CardContent className="p-6">
                    {/* Icon with Gradient Background */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:shadow-glow transition-all duration-500 group-hover:scale-110`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Feature List */}
                    <ul className="space-y-2 mb-6">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Learn More Button */}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full group/btn hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="text-sm text-muted-foreground flex items-center">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Scroll to explore all features
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;