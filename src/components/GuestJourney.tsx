import { Card } from "@/components/ui/card";
import { 
  Calendar, 
  QrCode, 
  Ticket, 
  Music, 
  UtensilsCrossed, 
  Users, 
  Heart,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const journeySteps = [
  {
    id: 1,
    icon: Calendar,
    title: "Pre-Visit Planning",
    description: "Guests book tickets, reserve meals, and plan rides in advance.",
    color: "from-blue-500 to-indigo-500",
    bgPattern: "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)"
  },
  {
    id: 2,
    icon: QrCode,
    title: "Arrival & Entry",
    description: "Quick scan with wristbands/QR — no waiting at the gate.",
    color: "from-indigo-500 to-purple-500",
    bgPattern: "radial-gradient(circle at 80% 20%, hsl(var(--primary) / 0.1) 0%, transparent 50%)"
  },
  {
    id: 3,
    icon: Ticket,
    title: "Rides & Attractions",
    description: "Reserve slots, get live updates, and receive alternatives when rides are busy or down.",
    color: "from-purple-500 to-pink-500",
    bgPattern: "radial-gradient(circle at 50% 100%, hsl(var(--primary) / 0.1) 0%, transparent 50%)"
  },
  {
    id: 4,
    icon: Music,
    title: "Live Entertainment",
    description: "Personalized alerts for parades, shows, and character meet-and-greets.",
    color: "from-pink-500 to-red-500",
    bgPattern: "radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.1) 0%, transparent 50%)"
  },
  {
    id: 5,
    icon: UtensilsCrossed,
    title: "Dining & Shopping",
    description: "Pre-order meals, pick up when ready, and pay cashless with one tap.",
    color: "from-red-500 to-orange-500",
    bgPattern: "radial-gradient(circle at 70% 40%, hsl(var(--primary) / 0.1) 0%, transparent 50%)"
  },
  {
    id: 6,
    icon: Users,
    title: "Family & Group",
    description: "Parents manage kids' wristbands, spending limits, and track location.",
    color: "from-orange-500 to-yellow-500",
    bgPattern: "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.1) 0%, transparent 50%)"
  },
  {
    id: 7,
    icon: Heart,
    title: "Departure & Loyalty",
    description: "Guests receive digital memories and personalized offers for their next visit.",
    color: "from-yellow-500 to-green-500",
    bgPattern: "radial-gradient(circle at 90% 70%, hsl(var(--primary) / 0.1) 0%, transparent 50%)"
  }
];

const GuestJourney = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-secondary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            The Guest Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            From Planning to Memories
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative mb-16">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 transform -translate-y-1/2 hidden lg:block" />
          
          {/* Journey Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-4">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="relative group"
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Connection Arrow for Mobile/Tablet */}
                  {index < journeySteps.length - 1 && (
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden">
                      <ArrowRight className="w-6 h-6 text-primary/30 rotate-90 lg:rotate-0" />
                    </div>
                  )}
                  
                  <Card 
                    className={`
                      relative p-6 h-full border-2 cursor-pointer
                      transition-all duration-500 ease-out
                      ${activeStep === step.id 
                        ? 'border-primary shadow-2xl scale-105 bg-gradient-to-br from-primary/5 to-secondary/5' 
                        : 'border-border hover:border-primary/50 hover:shadow-xl'
                      }
                    `}
                    style={{
                      background: activeStep === step.id ? step.bgPattern : 'transparent'
                    }}
                  >
                    {/* Step Number */}
                    <div className={`
                      absolute -top-3 -right-3 w-8 h-8 rounded-full 
                      flex items-center justify-center text-sm font-bold
                      transition-all duration-300
                      ${activeStep === step.id
                        ? 'bg-gradient-to-r ' + step.color + ' text-white shadow-lg'
                        : 'bg-muted text-muted-foreground'
                      }
                    `}>
                      {step.id}
                    </div>

                    {/* Icon Container */}
                    <div className={`
                      w-16 h-16 mx-auto mb-4 rounded-full
                      flex items-center justify-center
                      bg-gradient-to-br ${step.color}
                      transform transition-all duration-500
                      ${activeStep === step.id ? 'rotate-12 scale-110' : ''}
                    `}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-2 text-center">
                      {step.title}
                    </h3>
                    
                    <p className={`
                      text-sm text-muted-foreground text-center
                      transition-all duration-300
                      ${activeStep === step.id ? 'opacity-100' : 'lg:opacity-0 lg:group-hover:opacity-100'}
                    `}>
                      {step.description}
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-16 max-w-3xl mx-auto animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 blur-3xl" />
            <p className="relative text-xl md:text-2xl font-medium text-foreground/90 leading-relaxed">
              One seamless journey, <span className="text-primary">before</span>, 
              <span className="text-primary"> during</span>, and 
              <span className="text-primary"> after</span> the visit — 
              making every moment effortless and memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestJourney;