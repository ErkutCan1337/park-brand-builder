import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Gamepad2, 
  TreePalm, 
  UtensilsCrossed, 
  Ticket, 
  CreditCard, 
  Monitor,
  Users,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield
} from "lucide-react";
import fecImage from "@/assets/fec-experience.jpg";
import outdoorImage from "@/assets/outdoor-park.jpg";
import foodImage from "@/assets/food-beverage.jpg";

const Solutions = () => {
  const solutions = [
    {
      id: "fec",
      icon: Gamepad2,
      title: "Indoor Family Entertainment Centers",
      description: "Comprehensive POS and management solutions designed specifically for FECs, bowling alleys, arcade centers, and indoor attractions.",
      features: [
        "Game card management & RFID integration",
        "Birthday party & event booking",
        "Redemption prize management",
        "Real-time game analytics",
        "Food & beverage integration"
      ],
      stats: "1,200+ FEC locations",
      image: fecImage,
      alt: "Family enjoying modern indoor entertainment center with advanced technology systems"
    },
    {
      id: "parks",
      title: "Outdoor Parks & Attractions", 
      icon: TreePalm,
      description: "Scalable ticketing and operations platform for theme parks, water parks, zoos, and outdoor attractions of all sizes.",
      features: [
        "Online ticketing & season passes",
        "Gate management & access control",
        "Ride & attraction scheduling",
        "Group sales & corporate events",
        "Dynamic pricing optimization"
      ],
      stats: "800+ parks worldwide",
      image: outdoorImage,
      alt: "Large outdoor amusement park with roller coasters and modern digital systems"
    },
    {
      id: "retail",
      title: "Food & Beverage / Retail",
      icon: UtensilsCrossed,
      description: "Integrated F&B and retail solutions that streamline operations and enhance guest experience across all venues.",
      features: [
        "Mobile ordering & payment",
        "Inventory management",
        "Kitchen display systems",
        "Gift shop & merchandise",
        "Loyalty program integration"
      ],
      stats: "800+ retail locations",
      image: foodImage,
      alt: "Modern restaurant with digital menu boards and contactless payment systems"
    }
  ];

  const keyFeatures = [
    {
      icon: Ticket,
      title: "Online Ticketing",
      description: "Flexible, branded ticketing with dynamic pricing"
    },
    {
      icon: CreditCard,
      title: "RFID Cashless",
      description: "Seamless cashless payments throughout your venue"
    },
    {
      icon: Monitor,
      title: "Self-Service Kiosks",
      description: "Reduce wait times with intuitive kiosks"
    },
    {
      icon: Users,
      title: "CRM & Analytics",
      description: "Deep insights into guest behavior and preferences"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Modular Solutions for Every Venue
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From small FECs to major theme parks, our flexible platform scales with your business needs. Deploy modules independently or as an integrated solution.
          </p>
        </div>

        {/* Main Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card key={solution.id} className="relative overflow-hidden group hover:shadow-elevated transition-smooth animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Solution Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-lg gradient-primary shadow-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white drop-shadow-lg">
                            {solution.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-primary-light bg-white/90 backdrop-blur px-2 py-1 rounded-full">
                        {solution.stats}
                      </span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full group border-primary text-primary hover:bg-primary hover:text-white">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center text-2xl">
                          <Icon className="w-6 h-6 text-primary mr-3" />
                          {solution.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <img 
                          src={solution.image} 
                          alt={solution.alt}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            Key Features & Benefits
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {solution.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <TrendingUp className="w-4 h-4 text-primary mr-2" />
                            Success Metrics
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>{solution.stats}</strong> trust QRIO for their operations
                          </p>
                          <div className="grid grid-cols-3 gap-4 text-center mt-4">
                            <div>
                              <div className="text-lg font-bold text-primary">35%</div>
                              <div className="text-xs text-muted-foreground">Revenue Increase</div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-primary">50%</div>
                              <div className="text-xs text-muted-foreground">Time Savings</div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-primary">99.9%</div>
                              <div className="text-xs text-muted-foreground">Uptime</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button className="gradient-primary text-white flex-1">
                            Request Demo
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Download Brochure
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Features */}
        <div className="bg-card rounded-2xl p-8 shadow-brand">
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            Core Platform Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-4 group-hover:shadow-glow transition-smooth">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;