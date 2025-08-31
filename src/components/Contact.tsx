import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Users, 
  Briefcase,
  Globe,
  ArrowRight,
  Send
} from "lucide-react";

const Contact = () => {
  const offices = [
    {
      region: "North America",
      city: "Chicago , U.S.A.",
      address: "11417 IL-19, Franklin Park, IL 60131 ",
      phone: "+1 312 625 21 17",
      email: "info@crio.games"
    },
    {
      region: "Europe",
      city: "Oxford , UK", 
      address: "45 Innovation Street, London EC2A 4DP",
      phone: "+44 20 7555 0123",
      email: "info@crio.games"
    },
    {
      region: "Asia Pacific",
      city: "Ankara , TR",
      address: "Mutlukent Mah. 2037. Cad. No:30 Çankaya",
      phone: "+90 (312) 440 47 47",
      email: "info@crio.games"
    }
  ];

  const salesContacts = [
    {
      role: "Sales Director - Americas",
      name: "John Mitchell",
      phone: "+1 (407) 555-0145",
      email: "j.mitchell@qrio.com",
      specialties: ["Theme Parks", "Water Parks"]
    },
    {
      role: "Sales Director - EMEA",
      name: "Emma Thompson", 
      phone: "+44 20 7555 0167",
      email: "e.thompson@qrio.com",
      specialties: ["FECs", "Family Entertainment"]
    },
    {
      role: "Sales Director - APAC",
      name: "David Chen",
      phone: "+65 6555 0189",
      email: "d.chen@qrio.com", 
      specialties: ["Attractions", "Mixed-Use Venues"]
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your venue? Our global team is here to help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle className="text-2xl font-display flex items-center">
                  <Send className="w-6 h-6 text-primary mr-3" />
                  Request a Demo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Smith" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john.smith@venue.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input placeholder="Your Venue Name" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Venue Type</label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>Select venue type</option>
                      <option>Family Entertainment Center</option>
                      <option>Theme Park</option>
                      <option>Water Park</option>
                      <option>Attraction</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Locations</label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>Select locations</option>
                      <option>1 location</option>
                      <option>2-5 locations</option>
                      <option>6-10 locations</option>
                      <option>10+ locations</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tell us about your needs</label>
                  <Textarea 
                    placeholder="What challenges are you looking to solve? What solutions interest you most?"
                    rows={4}
                  />
                </div>

                <Button className="w-full gradient-primary text-white border-0 shadow-brand">
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive communications from QRIO. 
                  We respect your privacy and will never share your information.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Careers Section */}
            <Card className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 text-primary mr-2" />
                  Join Our Team
                </h3>
                <p className="text-muted-foreground mb-4">
                  We're always looking for talented individuals to join our growing global team. 
                  Help us shape the future of entertainment technology.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Software Engineers</Badge>
                  <Badge variant="outline">Sales Professionals</Badge>
                  <Badge variant="outline">Support Specialists</Badge>
                </div>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Sales Team */}
            <Card className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold mb-6 flex items-center">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  Sales Team
                </h3>
                <div className="space-y-4">
                  {salesContacts.map((contact, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-b-0">
                      <div className="font-semibold text-sm">{contact.name}</div>
                      <div className="text-xs text-primary font-medium mb-2">{contact.role}</div>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span className="flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {contact.phone}
                        </span>
                        <span className="flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          {contact.email}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {contact.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Global Offices */}
            <Card className="animate-slide-up" style={{animationDelay: '0.6s'}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold mb-6 flex items-center">
                  <Globe className="w-5 h-5 text-primary mr-2" />
                  Global Offices
                </h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-sm">{office.city}</div>
                        <Badge variant="outline" className="text-xs">{office.region}</Badge>
                      </div>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-2" />
                          {office.address}
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-3 h-3 mr-2" />
                          {office.phone}
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-3 h-3 mr-2" />
                          {office.email}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 text-primary mr-2" />
                    <span className="font-medium">24/7 Support Available</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Global support team ensures your operations never stop
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;