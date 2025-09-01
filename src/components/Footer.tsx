import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Youtube,
  Facebook
} from "lucide-react";

const Footer = () => {
  const productLinks = [
    { name: "FEC Solutions", href: "#" },
    { name: "Theme Park Platform", href: "#" },
    { name: "Water Park Systems", href: "#" },
    { name: "RFID & Cashless", href: "#" },
    { name: "Online Ticketing", href: "#" },
    { name: "Analytics & Reporting", href: "#" }
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "News & Press", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Awards", href: "#" },
    { name: "Contact", href: "#contact" }
  ];

  const resourceLinks = [
    { name: "Case Studies", href: "#" },
    { name: "White Papers", href: "#" },
    { name: "Product Demos", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Training", href: "#" },
    { name: "Support Portal", href: "#" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Security", href: "#" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/b6884abc-f32b-4b14-90ee-e540f97601bb.png" 
                  alt="QRIO Logo" 
                  className="h-8 w-auto mb-4"
                />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Leading technology platform for amusement parks, FECs, water parks, and attractions worldwide. 
                  
                </p>
              </div>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Stay Updated</h4>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="flex-1"
                  />
                  <Button className="gradient-primary text-white border-0">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Get the latest industry insights and product updates
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  +1 312 625 21 17
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  info@crio.games
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  11417 IL-19, Franklin Park, IL 60131 U.S.A.
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  Mutlukent Mah. 2037. Cad. No:30 Ankara TURKEY
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2018 CRIO Technology Solutions. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Awards & Certifications */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-2">Technology Solutions</p>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-primary">
                <span>•</span>
                <span>ISO 27001 Certified</span>
                <span>•</span>
                <span>PCI DSS Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;