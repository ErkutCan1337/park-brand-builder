import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Users, Rocket, Heart, Award, Globe, ArrowRight, Briefcase } from "lucide-react";
import JobApplicationModal from "@/components/JobApplicationModal";
const Careers = () => {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  
  const handleScrollToPositions = () => {
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
  };
  const jobOpenings = [{
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$120,000 - $180,000",
    description: "Build and scale our platform that powers entertainment venues worldwide."
  }, {
    title: "Product Manager",
    department: "Product",
    location: "New York / Remote",
    type: "Full-time",
    salary: "$110,000 - $160,000",
    description: "Drive product strategy for our modular entertainment technology solutions."
  }, {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Chicago / Remote",
    type: "Full-time",
    salary: "$75,000 - $95,000",
    description: "Help entertainment venues maximize their success with CRIO's platform."
  }, {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Austin / Remote",
    type: "Full-time",
    salary: "$100,000 - $140,000",
    description: "Maintain and optimize infrastructure serving globally."
  }];
  const benefits = [{
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance for you and your family"
  }, {
    icon: Rocket,
    title: "Growth & Learning",
    description: "$2,500 annual learning budget and conference attendance opportunities"
  }, {
    icon: Globe,
    title: "Remote-First",
    description: "Work from anywhere with flexible hours and $1,000 home office setup"
  }, {
    icon: Award,
    title: "Equity & Bonuses",
    description: "Competitive equity package and performance-based bonuses"
  }];
  const values = [{
    title: "Innovation First",
    description: "We're constantly pushing the boundaries of what's possible in entertainment technology."
  }, {
    title: "Customer-Centric",
    description: "Every decision we make puts our venue partners at the center."
  }, {
    title: "Global Impact",
    description: "Our work touches millions of guests across many countries every day."
  }, {
    title: "Team Excellence",
    description: "We hire the best and support each other to do our best work."
  }];
  return <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-glow/10 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex p-3 rounded-full gradient-primary mb-6 shadow-glow">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Join the Future of
              <span className="text-gradient"> Entertainment Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Help us power exceptional guest experiences at entertainment venues worldwide. 
              Be part of a team that's shaping the future of family entertainment, theme parks, and attractions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-white shadow-brand"
                onClick={handleScrollToPositions}
              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our Values Drive Everything We Do
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join a team that's passionate about creating exceptional experiences for millions of guests worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => <Card key={index} className="p-6 hover:shadow-elevated transition-smooth">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Benefits & Perks
              </h2>
              <p className="text-xl text-muted-foreground">
                We take care of our team so they can take care of our customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return <Card key={index} className="text-center p-6 hover:shadow-elevated transition-smooth">
                    <div className="inline-flex p-3 rounded-full gradient-primary mb-4 shadow-brand">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </Card>;
            })}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-muted-foreground">
                Find your next career opportunity with CRIO.
              </p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => <Card key={index} className="p-6 hover:shadow-elevated transition-smooth">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            <Briefcase className="w-3 h-3 mr-1" />
                            {job.department}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary-foreground">
                            <MapPin className="w-3 h-3 mr-1" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                            <Clock className="w-3 h-3 mr-1" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">{job.description}</p>
                      
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <Button 
                        className="gradient-primary text-white"
                        onClick={() => {
                          setSelectedJobTitle(job.title);
                          setIsApplicationModalOpen(true);
                        }}
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-glow/10 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Don't See the Perfect Role?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to the future of entertainment technology.
            </p>
            <Button size="lg" className="gradient-primary text-white shadow-brand">
              Send Us Your Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      
      <JobApplicationModal 
        open={isApplicationModalOpen} 
        onOpenChange={setIsApplicationModalOpen}
        jobTitle={selectedJobTitle}
      />
    </div>;
};
export default Careers;