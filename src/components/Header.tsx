import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import DemoRequestModal from "@/components/DemoRequestModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    
    // For pages that need scroll to top
    if (name === 'Solutions' || name === 'About' || name === 'Careers') {
      if (location.pathname === href) {
        // Already on the page, just scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Navigate to the page and then scroll to top
        navigate(href);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
      setIsMenuOpen(false);
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // If we're already on the homepage
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    } else {
      // Navigate to homepage then scroll
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
        }
      }, 100);
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/b6884abc-f32b-4b14-90ee-e540f97601bb.png" 
                alt="QRIO Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.name === 'Contact' ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleContactClick}
                  className="text-foreground hover:text-primary transition-smooth font-medium cursor-pointer"
                >
                  {item.name}
                </a>
              ) : item.name === 'Solutions' || item.name === 'About' || item.name === 'Careers' ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.name)}
                  className="text-foreground hover:text-primary transition-smooth font-medium cursor-pointer"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" onClick={() => setIsDemoModalOpen(true)}>
              Request Demo
            </Button>
            <Button className="gradient-primary text-white border-0 shadow-brand" onClick={() => setIsDemoModalOpen(true)}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.name === 'Contact' ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium cursor-pointer"
                    onClick={handleContactClick}
                  >
                    {item.name}
                  </a>
                ) : item.name === 'Solutions' || item.name === 'About' || item.name === 'Careers' ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.name)}
                    className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium cursor-pointer"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full" onClick={() => {
                  setIsDemoModalOpen(true);
                  setIsMenuOpen(false);
                }}>
                  Request Demo
                </Button>
                <Button className="w-full gradient-primary text-white border-0 shadow-brand" onClick={() => {
                  setIsDemoModalOpen(true);
                  setIsMenuOpen(false);
                }}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <DemoRequestModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </header>
  );
};

export default Header;