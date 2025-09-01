import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Users, Briefcase, Globe, ArrowRight, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate, useLocation } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    venueType: "",
    locations: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Successfully submitted!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      venueType: "",
      locations: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleViewPositions = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // If we're already on the careers page
    if (location.pathname === '/careers') {
      const positionsSection = document.querySelector('section:has(h2:first-child)');
      const h2Elements = document.querySelectorAll('h2');
      let openPositionsSection: HTMLElement | null = null;
      
      h2Elements.forEach(h2 => {
        if (h2.textContent?.includes('Open Positions')) {
          openPositionsSection = h2.closest('section');
        }
      });
      
      if (openPositionsSection) {
        openPositionsSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    } else {
      // Navigate to careers page then scroll
      navigate('/careers');
      setTimeout(() => {
        const h2Elements = document.querySelectorAll('h2');
        let openPositionsSection: HTMLElement | null = null;
        
        h2Elements.forEach(h2 => {
          if (h2.textContent?.includes('Open Positions')) {
            openPositionsSection = h2.closest('section');
          }
        });
        
        if (openPositionsSection) {
          openPositionsSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
    }
  };
  const offices = [{
    region: "North America",
    city: "Chicago , U.S.A.",
    address: "11417 IL-19, Franklin Park, IL 60131 ",
    phone: "+1 312 625 21 17",
    email: "info@crio.games"
  }, {
    region: "Europe",
    city: "Oxford , UK",
    address: "45 Innovation Street, London EC2A 4DP",
    phone: "+44 20 7555 0123",
    email: "info@crio.games"
  }, {
    region: "MENA/Asia ",
    city: "Ankara , TR",
    address: "Mutlukent Mah. 2037. Cad. No:30 Çankaya",
    phone: "+90 (312) 440 47 47",
    email: "info@crio.games"
  }];
  const salesContacts = [{
    role: "Sales Director - Americas",
    name: "John Mitchell",
    phone: "+1 (407) 555-0145",
    email: "j.mitchell@qrio.com",
    specialties: ["Theme Parks", "Water Parks"]
  }, {
    role: "Sales Director - EMEA",
    name: "Emma Thompson",
    phone: "+44 20 7555 0167",
    email: "e.thompson@qrio.com",
    specialties: ["FECs", "Family Entertainment"]
  }, {
    role: "Sales Director - APAC",
    name: "David Chen",
    phone: "+65 6555 0189",
    email: "d.chen@qrio.com",
    specialties: ["Attractions", "Mixed-Use Venues"]
  }];
  return <section id="contact" className="py-20">
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
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Smith" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.smith@venue.com" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Company *</label>
                    <Input 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Venue Name" 
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Venue Type</label>
                      <select 
                        name="venueType"
                        value={formData.venueType}
                        onChange={handleChange}
                        className="w-full p-2 border border-input rounded-md bg-background"
                      >
                        <option value="">Select venue type</option>
                        <option value="fec">Family Entertainment Center</option>
                        <option value="theme-park">Theme Park</option>
                        <option value="water-park">Water Park</option>
                        <option value="attraction">Attraction</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Number of Locations</label>
                      <select 
                        name="locations"
                        value={formData.locations}
                        onChange={handleChange}
                        className="w-full p-2 border border-input rounded-md bg-background"
                      >
                        <option value="">Select locations</option>
                        <option value="1">1 location</option>
                        <option value="2-5">2-5 locations</option>
                        <option value="6-10">6-10 locations</option>
                        <option value="10+">10+ locations</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Tell us about your needs</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What challenges are you looking to solve? What solutions interest you most?" 
                      rows={4} 
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full gradient-primary text-white border-0 shadow-brand"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Demo"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to receive communications from CRIO. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Careers Section */}
            <Card className="animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
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
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={handleViewPositions}
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Sales Team */}
            

            {/* Global Offices */}
            <Card className="animate-slide-up" style={{
            animationDelay: '0.6s'
          }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold mb-6 flex items-center">
                  <Globe className="w-5 h-5 text-primary mr-2" />
                  Global Offices
                </h3>
                <div className="space-y-4">
                  {offices.map((office, index) => <div key={index} className="border-b border-border pb-4 last:border-b-0">
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
                    </div>)}
                </div>
                
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;