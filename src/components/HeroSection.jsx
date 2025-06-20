import { ArrowDown } from "lucide-react";
import heroImage from "/public/profile.jpg"; // update path as needed

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-background"
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
        {/* Left Side - Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="block opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="block text-primary opacity-0 animate-fade-in-delay-1">
              Keith
            </span>
            <span className="block text-gradient opacity-0 animate-fade-in-delay-2">
              Arcedes
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            I build modern websites that make an impact.
            Focused on web development, I create clean and 
            user-friendly interfaces.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* Right Side - Round Image */}
        <div className="w-full flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Keith Arcedes"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs sm:text-sm text-muted-foreground mb-1">Scroll</span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
    </section>
  );
};
