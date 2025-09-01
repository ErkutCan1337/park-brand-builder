import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

interface DemoRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoRequestModal = ({ open, onOpenChange }: DemoRequestModalProps) => {
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
    onOpenChange(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display flex items-center">
            <Send className="w-6 h-6 text-primary mr-3" />
            Request a Demo
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will contact you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
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

          <div className="grid grid-cols-2 gap-4">
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
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to receive communications from CRIO. 
            We respect your privacy and will never share your information.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoRequestModal;