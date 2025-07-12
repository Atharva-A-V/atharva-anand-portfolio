import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-immersive relative overflow-hidden">
      {/* Enhanced immersive background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary-glow/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-primary-glow/12 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Enhanced typography */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4 leading-tight tracking-tight">
              Atharva Anand
            </h1>
            <h2 className="text-4xl md:text-6xl font-light text-primary mb-8 tracking-wide">
              Vaishampayan
            </h2>
          </div>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              <span className="text-primary font-medium">Machine Learning Engineer</span>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed">
              Building intelligent systems with code, data, and a purpose.
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* Resume Button (no icon, opens Google Drive link) */}
            <a
              href="https://drive.google.com/file/d/1kTAZfZ_mwgAPzTXVooi3ibhndejQNO3p/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="px-8 py-4 text-lg shadow-immersive">
                View Resume
              </Button>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/atharvaanandv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="professional" size="lg" className="group px-8 py-4 text-lg shadow-immersive">
                <Linkedin className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                View LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
