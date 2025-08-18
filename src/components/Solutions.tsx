import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  TreePalm, 
  UtensilsCrossed, 
  Ticket, 
  CreditCard, 
  Monitor,
  Users,
  ArrowRight
} from "lucide-react";

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
      stats: "1,200+ FEC locations"
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
      stats: "800+ parks worldwide"
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
      stats: "800+ retail locations"
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
                <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-5 transform rotate-45 translate-x-16 -translate-y-16"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg gradient-primary/10 border border-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {solution.stats}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-display">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group border-primary text-primary hover:bg-primary hover:text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </Button>
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