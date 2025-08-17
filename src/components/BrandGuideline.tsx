import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette, Type, Layout, Zap } from "lucide-react";

const BrandGuideline = () => {
  const colorPalette = [
    { name: "Primary Orange", hex: "#FF6B35", hsl: "15 100% 60%", usage: "Main brand color, CTAs, highlights" },
    { name: "Primary Deep", hex: "#E53E3E", hsl: "5 85% 50%", usage: "Hover states, emphasis" },
    { name: "Primary Glow", hex: "#FF8C42", hsl: "25 100% 65%", usage: "Light accents, gradients" },
    { name: "Secondary Gold", hex: "#FFCA28", hsl: "39 100% 70%", usage: "Success states, awards, highlights" },
    { name: "Background", hex: "#FAFAFA", hsl: "0 0% 98%", usage: "Page backgrounds" },
    { name: "Foreground", hex: "#2D2D2D", hsl: "15 25% 15%", usage: "Primary text color" }
  ];

  const typography = [
    { name: "Display Font", family: "Montserrat", usage: "Headlines, hero text, section titles", weights: "400, 500, 600, 700, 800, 900" },
    { name: "Body Font", family: "Inter", usage: "Body text, navigation, buttons", weights: "300, 400, 500, 600, 700, 800" }
  ];

  const gradients = [
    { name: "Primary Gradient", css: "linear-gradient(135deg, #FF8C42, #E53E3E)", usage: "Hero sections, primary buttons" },
    { name: "Secondary Gradient", css: "linear-gradient(45deg, #FFCA28, #FF8C42)", usage: "Accent elements, cards" },
    { name: "Hero Gradient", css: "linear-gradient(135deg, #FF8C42, #FF6B35, #E53E3E)", usage: "Main hero backgrounds" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="gradient-primary text-white mb-4">
            QRIO Brand Guidelines
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Brand Design System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visual identity extracted from the QRIO logo, ensuring consistent brand application across all touchpoints.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Color Palette */}
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="w-5 h-5 text-primary mr-2" />
                Color Palette
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {colorPalette.map((color, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-lg shadow-sm border border-border flex-shrink-0"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm">{color.name}</div>
                      <div className="text-xs text-muted-foreground font-mono">
                        {color.hex} • HSL({color.hsl})
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {color.usage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Typography */}
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Type className="w-5 h-5 text-primary mr-2" />
                Typography
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {typography.map((font, index) => (
                  <div key={index}>
                    <div className="font-semibold text-sm mb-2">{font.name}</div>
                    <div className="text-xs text-muted-foreground mb-3">
                      Family: {font.family} • Weights: {font.weights}
                    </div>
                    <div className="text-xs text-muted-foreground mb-3">
                      Usage: {font.usage}
                    </div>
                    <div 
                      className={`text-xl ${font.name === 'Display Font' ? 'font-display font-bold' : 'font-sans'}`}
                    >
                      The quick brown fox jumps over the lazy dog
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gradients */}
        <Card className="shadow-elevated mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="w-5 h-5 text-primary mr-2" />
              Brand Gradients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gradients.map((gradient, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="w-full h-24 rounded-lg mb-3 border border-border"
                    style={{ background: gradient.css }}
                  ></div>
                  <div className="font-semibold text-sm mb-1">{gradient.name}</div>
                  <div className="text-xs text-muted-foreground font-mono mb-2">
                    {gradient.css}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {gradient.usage}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Component Examples */}
        <Card className="shadow-elevated">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Layout className="w-5 h-5 text-primary mr-2" />
              Component Examples
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Primary Button */}
              <div className="text-center">
                <Button className="gradient-primary text-white border-0 shadow-brand mb-2">
                  Primary Button
                </Button>
                <div className="text-xs text-muted-foreground">
                  Primary CTA with gradient and shadow
                </div>
              </div>

              {/* Secondary Button */}
              <div className="text-center">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white mb-2">
                  Secondary Button
                </Button>
                <div className="text-xs text-muted-foreground">
                  Secondary actions with brand colors
                </div>
              </div>

              {/* Badge */}
              <div className="text-center">
                <Badge className="gradient-primary text-white mb-2">
                  Award Winner
                </Badge>
                <div className="text-xs text-muted-foreground">
                  Status badges with gradient
                </div>
              </div>

              {/* Text Gradient */}
              <div className="text-center">
                <div className="text-xl font-display font-bold text-gradient mb-2">
                  Brand Text
                </div>
                <div className="text-xs text-muted-foreground">
                  Gradient text for emphasis
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent rounded-lg border border-primary/10">
              <h4 className="font-semibold mb-3">Usage Guidelines</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Use primary orange (#FF6B35) for main CTAs and brand elements</li>
                <li>• Apply gradients sparingly on key elements for maximum impact</li>
                <li>• Maintain consistent spacing using the design system tokens</li>
                <li>• Use Montserrat for headlines, Inter for body text</li>
                <li>• Ensure proper contrast ratios for accessibility</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BrandGuideline;