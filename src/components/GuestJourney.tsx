import { 
  Calendar, 
  QrCode, 
  Ticket, 
  Music, 
  UtensilsCrossed, 
  Users, 
  Heart,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const journeySteps = [
  {
    id: 1,
    icon: Calendar,
    title: "Pre-Visit Planning",
    description: "Guests book tickets, reserve meals, and plan rides in advance.",
  },
  {
    id: 2,
    icon: QrCode,
    title: "Arrival & Entry",
    description: "Quick scan with wristbands/QR — no waiting at the gate.",
  },
  {
    id: 3,
    icon: Ticket,
    title: "Rides & Attractions",
    description: "Reserve slots, get live updates, and receive alternatives when rides are busy or down.",
  },
  {
    id: 4,
    icon: Music,
    title: "Live Entertainment",
    description: "Personalized alerts for parades, shows, and character meet-and-greets.",
  },
  {
    id: 5,
    icon: UtensilsCrossed,
    title: "Dining & Shopping",
    description: "Pre-order meals, pick up when ready, and pay cashless with one tap.",
  },
  {
    id: 6,
    icon: Users,
    title: "Family & Group",
    description: "Parents manage kids' wristbands, spending limits, and track location.",
  },
  {
    id: 7,
    icon: Heart,
    title: "Departure & Loyalty",
    description: "Guests receive digital memories and personalized offers for their next visit.",
  }
];

const GuestJourney = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Guest Journey
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            From Planning to Memories
          </p>
        </div>

        {/* Journey Steps - Vertical Timeline on Mobile, Horizontal on Desktop */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Progress Bar Background */}
            <div className="absolute top-24 left-12 right-12 h-1 bg-border rounded-full" />
            
            {/* Active Progress Bar */}
            <div 
              className="absolute top-24 left-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-700"
              style={{ 
                width: hoveredStep ? `${((hoveredStep - 1) / (journeySteps.length - 1)) * (100 - 10)}%` : '0%' 
              }}
            />
            
            <div className="grid grid-cols-7 gap-4">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = hoveredStep === step.id || hoveredStep === null;
                
                return (
                  <div
                    key={step.id}
                    className="relative h-full"
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Step Indicator */}
                    <div className="flex flex-col items-center h-full">
                      {/* Icon Circle */}
                      <div 
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                          "border-2 bg-background flex-shrink-0",
                          isActive 
                            ? "border-primary shadow-lg shadow-primary/25 scale-110" 
                            : "border-border"
                        )}
                      >
                        <Icon 
                          className={cn(
                            "w-6 h-6 transition-colors duration-300",
                            isActive ? "text-primary" : "text-muted-foreground"
                          )} 
                        />
                      </div>
                      
                      {/* Content Card - Fixed Height */}
                      <div 
                        className={cn(
                          "mt-8 p-6 rounded-xl border bg-card transition-all duration-300",
                          "hover:shadow-xl hover:border-primary/50",
                          "w-full h-[200px] flex flex-col",
                          isActive ? "opacity-100" : "opacity-70"
                        )}
                      >
                        <h3 className="font-semibold text-lg mb-3 text-center">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed text-center flex-1 flex items-center">
                          <span>{step.description}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet Timeline */}
          <div className="lg:hidden space-y-6">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={step.id} className="relative">
                  {/* Connection Line */}
                  {index < journeySteps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                  
                  {/* Step Card */}
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="bg-card rounded-xl border p-6 hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold text-xl mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Arrow for next step */}
                      {index < journeySteps.length - 1 && (
                        <div className="mt-4 flex items-center gap-2 text-primary/60">
                          <ChevronRight className="w-5 h-5" />
                          <span className="text-sm font-medium">Next Step</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
              One seamless journey, 
              <span className="text-primary font-semibold"> before</span>, 
              <span className="text-secondary font-semibold"> during</span>, and 
              <span className="text-primary font-semibold"> after</span> the visit — 
              making every moment effortless and memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestJourney;