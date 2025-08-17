import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Video, 
  BookOpen, 
  Users, 
  ArrowRight,
  Calendar,
  Download,
  Star
} from "lucide-react";

const Resources = () => {
  const resources = [
    {
      type: "Case Study",
      title: "Major Theme Park Increases Revenue 23% with QRIO",
      description: "How a leading theme park implemented our integrated platform to streamline operations and boost guest satisfaction.",
      readTime: "5 min read",
      category: "Theme Parks",
      featured: true
    },
    {
      type: "White Paper",
      title: "The Future of Cashless Payments in Entertainment",
      description: "Industry insights on RFID technology adoption and its impact on guest experience and operational efficiency.",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      type: "Video",
      title: "QRIO Platform Demo: FEC Management Made Simple",
      description: "Complete walkthrough of our FEC solution featuring game management, party booking, and analytics.",
      readTime: "12 min watch",
      category: "Product Demo"
    }
  ];

  const testimonials = [
    {
      quote: "QRIO transformed our operations completely. The integrated platform saved us countless hours and increased our revenue by 35% in the first year.",
      author: "Sarah Chen",
      title: "General Manager",
      company: "Adventure Zone FEC",
      rating: 5
    },
    {
      quote: "The reliability and support from QRIO is unmatched. Our guests love the seamless experience, and we love the actionable insights.",
      author: "Mike Rodriguez",
      title: "Operations Director", 
      company: "WaterWorld Theme Park",
      rating: 5
    },
    {
      quote: "Implementation was smooth, and the modular approach let us start small and scale up. Best technology investment we've made.",
      author: "Lisa Thompson",
      title: "Owner",
      company: "Family Fun Center",
      rating: 5
    }
  ];

  const upcomingEvents = [
    {
      date: "Mar 15-17",
      event: "IAAPA Expo Europe",
      location: "Amsterdam, Netherlands",
      booth: "Booth #1420"
    },
    {
      date: "Jun 8-10",
      event: "FEC Summit",
      location: "Orlando, FL",
      booth: "Platinum Sponsor"
    },
    {
      date: "Nov 14-17",
      event: "IAAPA Expo",
      location: "Orlando, FL",
      booth: "Booth #3245"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Resources & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with industry insights, case studies, and expert guidance from the QRIO team.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className={`group hover:shadow-elevated transition-smooth animate-slide-up ${resource.featured ? 'ring-2 ring-primary/20' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
              {resource.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="gradient-primary text-white">
                    Featured
                  </Badge>
                </div>
              )}
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {resource.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-smooth">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-medium">{resource.category}</span>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-smooth" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Client Testimonials */}
          <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center">
              <Users className="w-6 h-6 text-primary mr-3" />
              What Our Clients Say
            </h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-brand transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <blockquote className="text-sm italic text-muted-foreground mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-semibold text-sm mr-3">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{testimonial.author}</div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.title}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events & Downloads */}
          <div className="space-y-8">
            {/* Events */}
            <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-primary mr-3" />
                Meet Us at Industry Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-brand transition-smooth">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-sm">{event.event}</div>
                          <div className="text-xs text-muted-foreground">{event.location}</div>
                          <div className="text-xs text-primary font-medium">{event.booth}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-primary">{event.date}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Downloads */}
            <Card className="gradient-primary text-white animate-slide-up" style={{animationDelay: '0.8s'}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold mb-4 flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resources
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-white/20">
                    <span>Product Brochure (PDF)</span>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/20">
                    <span>ROI Calculator (Excel)</span>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span>Implementation Guide</span>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;