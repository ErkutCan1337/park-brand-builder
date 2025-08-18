import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Heart, 
  Zap, 
  Shield, 
  Globe,
  Trophy,
  Lightbulb
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously pushing boundaries with cutting-edge technology solutions"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Mission-critical systems that operators depend on every day"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Supporting venues across 60+ countries with local expertise"
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "Building long-term relationships with shared success"
    }
  ];

  const achievements = [
    "IAAPA Brass Ring Award Winner",
    "IAAPI Innovative Product of the Year",
    "Best Technology Provider - Amusement Today",
    "Excellence in Customer Service Award"
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <Badge variant="outline" className="border-primary text-primary mb-4">
                About QRIO
              </Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Powering the Future of 
                <span className="text-gradient"> Entertainment Technology</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                For over two decades, QRIO has been at the forefront of entertainment technology, 
                transforming how venues operate and how guests experience attractions worldwide.
              </p>
              
              <p>
                Our comprehensive platform integrates point-of-sale, ticketing, access control, 
                and guest experience management into a single, powerful solution that scales 
                from family entertainment centers to major theme parks.
              </p>

              <div className="bg-accent rounded-xl p-6 border border-primary/10">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg gradient-primary">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Mission</h4>
                    <p className="text-sm">
                      To empower entertainment venues with technology that enhances operational 
                      efficiency, drives revenue growth, and creates unforgettable guest experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary-muted rounded-xl p-6 border border-secondary/20">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-secondary">
                    <Eye className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Vision</h4>
                    <p className="text-sm">
                      To be the global standard for entertainment technology, connecting venues 
                      and guests through innovative, integrated solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Values & Achievements */}
          <div className="space-y-8">
            {/* Core Values */}
            <Card className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold mb-6 flex items-center">
                  <Lightbulb className="w-5 h-5 text-primary mr-2" />
                  Our Core Values
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={index} className="text-center p-4 rounded-lg hover:bg-muted/50 transition-smooth">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full gradient-primary mb-3">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-sm mb-2">{value.title}</h4>
                        <p className="text-xs text-muted-foreground">{value.description}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Awards & Recognition */}
            <Card className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold mb-6 flex items-center">
                  <Trophy className="w-5 h-5 text-primary mr-2" />
                  Awards & Recognition
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full gradient-primary"></div>
                      <span className="text-sm font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Advantages */}
            <Card className="gradient-primary text-white animate-slide-up" style={{animationDelay: '0.6s'}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold mb-4">Key Advantages</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Modular deployment strategy - implement what you need, when you need it</li>
                  <li>• 24/7 global support with local market expertise</li>
                  <li>• Cloud-based architecture with offline capabilities</li>
                  <li>• Seamless integration with existing systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;