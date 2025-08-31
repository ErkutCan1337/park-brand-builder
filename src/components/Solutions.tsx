import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Gamepad2, TreePalm, UtensilsCrossed, Ticket, CreditCard, Monitor, Users, ArrowRight, CheckCircle, TrendingUp, Shield } from "lucide-react";
import fecImage from "@/assets/fec-experience.jpg";
import outdoorImage from "@/assets/outdoor-park.jpg";
import foodImage from "@/assets/food-beverage.jpg";
const Solutions = () => {
  const solutions = [{
    id: "fec",
    icon: Gamepad2,
    title: "Indoor Family Entertainment Centers",
    description: "Comprehensive POS and management solutions designed specifically for FECs, bowling alleys, arcade centers, and indoor attractions.",
    features: ["Game card management & RFID integration", "Birthday party & event booking", "Redemption prize management", "Real-time game analytics", "Food & beverage integration"],
    stats: "1,200+ FEC locations",
    image: fecImage,
    alt: "Family enjoying modern indoor entertainment center with advanced technology systems"
  }, {
    id: "parks",
    title: "Outdoor Parks & Attractions",
    icon: TreePalm,
    description: "Scalable ticketing and operations platform for theme parks, water parks, zoos, and outdoor attractions of all sizes.",
    features: ["Online ticketing & season passes", "Gate management & access control", "Ride & attraction scheduling", "Group sales & corporate events", "Dynamic pricing optimization"],
    stats: "800+ parks worldwide",
    image: outdoorImage,
    alt: "Large outdoor amusement park with roller coasters and modern digital systems"
  }, {
    id: "retail",
    title: "Food & Beverage / Retail",
    icon: UtensilsCrossed,
    description: "Integrated F&B and retail solutions that streamline operations and enhance guest experience across all venues.",
    features: ["Mobile ordering & payment", "Inventory management", "Kitchen display systems", "Gift shop & merchandise", "Loyalty program integration"],
    stats: "800+ retail locations",
    image: foodImage,
    alt: "Modern restaurant with digital menu boards and contactless payment systems"
  }];
  const keyFeatures = [{
    icon: Ticket,
    title: "Online Ticketing",
    description: "Flexible, branded ticketing with dynamic pricing"
  }, {
    icon: CreditCard,
    title: "RFID Cashless",
    description: "Seamless cashless payments throughout your venue"
  }, {
    icon: Monitor,
    title: "Self-Service Kiosks",
    description: "Reduce wait times with intuitive kiosks"
  }, {
    icon: Users,
    title: "CRM & Analytics",
    description: "Deep insights into guest behavior and preferences"
  }];
  return <section id="solutions" className="py-20 bg-muted/30">
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
          return <Card key={solution.id} className="relative overflow-hidden group hover:shadow-elevated transition-smooth animate-slide-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Solution Image */}
                <div className="relative h-48 overflow-hidden">
                  <img src={solution.image} alt={solution.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
                      
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>)}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full group border-primary text-primary hover:bg-primary hover:text-white">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader className="border-b pb-6">
                        <div className="flex items-center justify-between">
                          <DialogTitle className="flex items-center text-3xl font-display">
                            <div className="p-3 rounded-2xl gradient-primary mr-4 shadow-glow">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <div className="text-2xl font-bold">{solution.title}</div>
                              <div className="text-lg text-muted-foreground font-normal">{solution.stats}</div>
                            </div>
                          </DialogTitle>
                        </div>
                      </DialogHeader>
                      
                      <div className="space-y-8 py-6">
                        {/* Hero Image */}
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-elevated">
                          <img src={solution.image} alt={solution.alt} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              Transform Your Operations
                            </h3>
                            <p className="text-white/90 text-lg">
                              {solution.description}
                            </p>
                          </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                              <CheckCircle className="w-6 h-6 text-success mr-3" />
                              Key Features
                            </h3>
                            <div className="space-y-4">
                              {solution.features.map((feature, idx) => <div key={idx} className="flex items-start p-4 bg-muted/30 rounded-xl">
                                  <div className="w-3 h-3 rounded-full gradient-primary mt-2 mr-4 flex-shrink-0 shadow-brand"></div>
                                  <span className="font-medium">{feature}</span>
                                </div>)}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-2xl font-bold mb-6 flex items-center">
                              <TrendingUp className="w-6 h-6 text-primary mr-3" />
                              Success Metrics
                            </h4>
                            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl border">
                              <p className="text-lg mb-6">
                                <strong className="text-primary">{solution.stats}</strong> trust crio for their operations
                              </p>
                              <div className="grid grid-cols-1 gap-6">
                                <div className="text-center p-4 bg-card rounded-xl shadow-sm">
                                  <div className="text-3xl font-bold text-primary mb-2">35%</div>
                                  <div className="text-sm text-muted-foreground">Average Revenue Increase</div>
                                </div>
                                <div className="text-center p-4 bg-card rounded-xl shadow-sm">
                                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                                  <div className="text-sm text-muted-foreground">Operational Time Savings</div>
                                </div>
                                <div className="text-center p-4 bg-card rounded-xl shadow-sm">
                                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                                  <div className="text-sm text-muted-foreground">System Uptime</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-gradient-to-r from-primary/10 via-primary-glow/10 to-secondary/10 rounded-2xl p-8 text-center">
                          <h4 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h4>
                          <p className="text-muted-foreground mb-6 text-lg">
                            Join thousands of venues worldwide who trust crio for their technology needs.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="gradient-primary text-white px-8 py-4 text-lg shadow-brand">
                              Schedule Demo
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>;
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
            return <div key={index} className="text-center group animate-slide-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-4 group-hover:shadow-glow transition-smooth">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default Solutions;