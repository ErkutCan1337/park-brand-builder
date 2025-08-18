import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  FileText, 
  Video, 
  BookOpen, 
  Users, 
  ArrowRight,
  Calendar,
  Download,
  Star,
  TrendingUp,
  Target,
  Award
} from "lucide-react";

const Resources = () => {
  const resources = [
    {
      type: "Case Study",
      title: "Major Theme Park Increases Revenue 23% with QRIO",
      description: "How a leading theme park implemented our integrated platform to streamline operations and boost guest satisfaction.",
      readTime: "5 min read",
      category: "Theme Parks",
      featured: true,
      fullContent: {
        overview: "A major theme park with 2.5 million annual visitors faced challenges with fragmented systems, long wait times, and limited guest insights. After implementing QRIO's integrated platform, they achieved remarkable results.",
        challenge: "The park operated with 12 different software systems, causing data silos, inefficient operations, and poor guest experience. Staff spent hours manually reconciling data instead of focusing on guest service.",
        solution: "QRIO's unified platform integrated ticketing, F&B, retail, and analytics into one seamless system with real-time reporting and mobile-first guest experience.",
        results: [
          "23% increase in total revenue within 12 months",
          "45% reduction in guest wait times",
          "35% improvement in guest satisfaction scores",
          "60% decrease in operational costs",
          "Real-time insights across all revenue streams"
        ]
      }
    },
    {
      type: "White Paper",
      title: "The Future of Cashless Payments in Entertainment",
      description: "Industry insights on RFID technology adoption and its impact on guest experience and operational efficiency.",
      readTime: "8 min read",
      category: "Technology",
      fullContent: {
        overview: "Explore how RFID cashless payment systems are revolutionizing the entertainment industry, driving both guest satisfaction and operational efficiency.",
        challenge: "Traditional cash and card transactions create friction in the guest experience while limiting valuable data collection opportunities for operators.",
        solution: "RFID wearables and cards enable seamless, contactless payments while providing rich guest behavior analytics and reducing transaction times by up to 70%.",
        results: [
          "Increase average spend per guest by 15-25%", 
          "Reduce transaction time from 45 seconds to 3 seconds",
          "Eliminate cash handling costs and security risks",
          "Gain detailed guest behavior insights",
          "Improve operational efficiency across all revenue centers"
        ]
      }
    },
    {
      type: "Video",
      title: "QRIO Platform Demo: FEC Management Made Simple",
      description: "Complete walkthrough of our FEC solution featuring game management, party booking, and analytics.",
      readTime: "12 min watch",
      category: "Product Demo",
      fullContent: {
        overview: "Join our product expert for a comprehensive demonstration of QRIO's FEC management platform, designed specifically for family entertainment centers.",
        challenge: "FEC operators juggle multiple systems for games, parties, food service, and reporting, leading to operational complexity and missed revenue opportunities.",
        solution: "QRIO's all-in-one FEC platform streamlines operations with integrated game management, party booking, POS, and real-time analytics dashboard.",
        results: [
          "Streamline operations with single-system management",
          "Increase party bookings by 40% with online scheduling",
          "Improve game utilization and maintenance tracking",
          "Access real-time performance analytics",
          "Enhance guest experience with mobile app integration"
        ]
      }
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-smooth" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader className="border-b pb-6">
                        <div className="flex items-center justify-between">
                          <DialogTitle className="text-3xl font-display font-bold">
                            {resource.title}
                          </DialogTitle>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">{resource.type}</Badge>
                            <Badge className="gradient-primary text-white">{resource.category}</Badge>
                            <span className="text-sm text-muted-foreground">{resource.readTime}</span>
                          </div>
                        </div>
                      </DialogHeader>
                      
                      <div className="space-y-8 py-6">
                        {/* Hero Section with Visual */}
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-elevated bg-gradient-to-br from-primary/20 via-primary-glow/10 to-secondary/20">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="p-3 rounded-xl bg-white/20 backdrop-blur border border-white/30">
                                {resource.type === 'Case Study' && <TrendingUp className="w-7 h-7 text-white" />}
                                {resource.type === 'White Paper' && <FileText className="w-7 h-7 text-white" />}
                                {resource.type === 'Video' && <Video className="w-7 h-7 text-white" />}
                              </div>
                              <div className="text-white/90 text-sm">
                                {resource.category} • {resource.readTime}
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">
                              {resource.description}
                            </h3>
                          </div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          <div className="lg:col-span-2 space-y-8">
                            {/* Overview */}
                            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl border">
                              <h3 className="text-xl font-bold mb-4 flex items-center">
                                <BookOpen className="w-6 h-6 text-primary mr-3" />
                                Overview
                              </h3>
                              <p className="text-base leading-relaxed text-muted-foreground">
                                {resource.fullContent.overview}
                              </p>
                            </div>

                            {/* Challenge & Solution */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="bg-card p-6 rounded-2xl shadow-sm border">
                                <h3 className="text-lg font-bold mb-4 flex items-center">
                                  <Target className="w-5 h-5 text-destructive mr-3" />
                                  Challenge
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {resource.fullContent.challenge}
                                </p>
                              </div>

                              <div className="bg-card p-6 rounded-2xl shadow-sm border">
                                <h3 className="text-lg font-bold mb-4 flex items-center">
                                  <Award className="w-5 h-5 text-primary mr-3" />
                                  Solution
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {resource.fullContent.solution}
                                </p>
                              </div>
                            </div>

                            {/* Results */}
                            <div>
                              <h3 className="text-xl font-bold mb-6 flex items-center">
                                <TrendingUp className="w-6 h-6 text-success mr-3" />
                                Key Results & Benefits
                              </h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {resource.fullContent.results.map((result, idx) => (
                                  <div key={idx} className="flex items-start p-4 bg-success/5 border border-success/20 rounded-xl">
                                    <div className="w-3 h-3 rounded-full bg-success mt-2 mr-4 flex-shrink-0"></div>
                                    <span className="text-sm font-medium text-success-foreground">{result}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          {/* Sidebar */}
                          <div className="space-y-6">
                            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl border">
                              <h4 className="font-bold mb-4">Quick Stats</h4>
                              <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-muted-foreground">Venues Studied</span>
                                  <span className="font-bold text-primary">2,800+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-muted-foreground">Countries</span>
                                  <span className="font-bold text-primary">60+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-muted-foreground">Avg. ROI Increase</span>
                                  <span className="font-bold text-success">35%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-muted-foreground">Implementation Time</span>
                                  <span className="font-bold text-primary">30 days</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-card p-6 rounded-2xl shadow-sm border">
                              <h4 className="font-bold mb-4">Related Resources</h4>
                              <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                  <FileText className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <div className="text-sm">
                                    <div className="font-medium">Digital Transformation Guide</div>
                                    <div className="text-muted-foreground">Complete implementation roadmap</div>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                  <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <div className="text-sm">
                                    <div className="font-medium">ROI Calculator</div>
                                    <div className="text-muted-foreground">Estimate your potential savings</div>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                  <Video className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <div className="text-sm">
                                    <div className="font-medium">Platform Walkthrough</div>
                                    <div className="text-muted-foreground">15-minute product demo</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-gradient-to-r from-primary/10 via-primary-glow/10 to-secondary/10 rounded-2xl p-8 text-center">
                          <h4 className="text-2xl font-bold mb-4">Ready to Achieve Similar Results?</h4>
                          <p className="text-muted-foreground mb-6 text-lg">
                            Get personalized insights for your venue with a free consultation from our experts.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="gradient-primary text-white px-8 py-4 text-lg shadow-brand">
                              Schedule Consultation
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2">
                              Download Full {resource.type}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
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