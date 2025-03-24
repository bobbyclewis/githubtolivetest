import React from "react";
import { Shield, BarChart3, Clock, Settings } from "lucide-react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({
  icon,
  title = "Benefit Title",
  description = "This is a placeholder description for the benefit.",
}: BenefitCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4 text-primary p-3 bg-primary/10 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

interface BenefitsSectionProps {
  benefits?: BenefitCardProps[];
  title?: string;
  subtitle?: string;
}

const BenefitsSection = ({
  benefits = [
    {
      icon: <Shield size={24} />,
      title: "Secure Management",
      description:
        "Keep your cabinet inventory secure with advanced permission controls and data encryption.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Detailed Analytics",
      description:
        "Track usage patterns and inventory levels with comprehensive reporting tools.",
    },
    {
      icon: <Clock size={24} />,
      title: "Time Saving",
      description:
        "Reduce administrative overhead with automated inventory tracking and management.",
    },
    {
      icon: <Settings size={24} />,
      title: "Customizable",
      description:
        "Tailor the portal to your specific cabinet management needs with flexible configuration options.",
    },
  ],
  title = "Why Choose Our Cabinet Portal",
  subtitle = "Streamline your cabinet management with these powerful features",
}: BenefitsSectionProps) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
