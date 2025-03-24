import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Streamline Your Cabinet Management",
  subtitle = "Powerful tools to organize, track, and optimize your cabinet business operations all in one place.",
  ctaText = "Get Started",
  onCtaClick = () => console.log("CTA clicked"),
  backgroundImage = "https://images.unsplash.com/photo-1556909114-44e3e9399e2b?w=1200&q=80",
}) => {
  return (
    <div className="relative h-[600px] w-full bg-gray-100 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">{subtitle}</p>
          <Button
            size="lg"
            onClick={onCtaClick}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-md transition-all"
          >
            {ctaText}
          </Button>
        </div>
      </div>

      {/* Optional decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
