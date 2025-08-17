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
import teamImage from "@/assets/team-collaboration.jpg";
import awardsImage from "@/assets/awards-display.jpg";

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
        {/* Hero Section with Team Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
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

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="text-3xl font-bold text-gradient">2,800+</div>
                  <div className="text-sm text-muted-foreground">Global Sites</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="text-3xl font-bold text-gradient">60+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Team Image */}
          <div className="relative animate-slide-up" style={{animationDelay: '0.2s'}}>
            <img 
              src={teamImage} 
              alt="QRIO team collaborating on technology solutions for entertainment venues" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20"></div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Trophy className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-bold text-sm">Award Winner</div>
                  <div className="text-xs text-muted-foreground">IAAPA Brass Ring 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-accent rounded-xl p-8 border border-primary/10 animate-slide-up">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg gradient-primary">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-lg">Our Mission</h4>
                <p className="leading-relaxed">
                  To empower entertainment venues with technology that enhances operational 
                  efficiency, drives revenue growth, and creates unforgettable guest experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary-muted rounded-xl p-8 border border-secondary/20 animate-slide-up" style={{animationDelay: '0.1s'}}>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-secondary">
                <Eye className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-lg">Our Vision</h4>
                <p className="leading-relaxed">
                  To be the global standard for entertainment technology, connecting venues 
                  and guests through innovative, integrated solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section with Visual Focus */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative animate-slide-up">
            <img 
              src={awardsImage} 
              alt="QRIO industry awards and recognition display including IAAPA Brass Ring Award" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
          </div>
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-3xl font-display font-bold mb-8 text-gradient">Industry Recognition</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-full gradient-primary">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold">{achievement}</h4>
                        <p className="text-sm text-muted-foreground">Excellence in Entertainment Technology</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Values & Advantages */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Core Values */}
          <Card className="animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center">
                <Lightbulb className="w-6 h-6 text-primary mr-3" />
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="text-center p-4 rounded-lg hover:bg-muted/50 transition-smooth">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Key Advantages */}
          <Card className="gradient-primary text-white animate-slide-up" style={{animationDelay: '0.2s'}}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Key Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <span>Modular deployment strategy - implement what you need, when you need it</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <span>24/7 global support with local market expertise</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <span>Cloud-based architecture with offline capabilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <span>Seamless integration with existing systems</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;