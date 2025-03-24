import React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  avatarUrl: string;
}

const Testimonial = ({
  quote = "Cabinet Portal has transformed how we manage our inventory. The interface is intuitive and the support team is always responsive.",
  author = "Jane Smith",
  company = "Modern Kitchens Inc.",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
}: TestimonialProps) => {
  return (
    <Card className="h-full bg-white shadow-md">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 text-primary">
          <Quote size={32} />
        </div>
        <p className="text-gray-700 mb-6 flex-grow italic">{quote}</p>
        <div className="flex items-center">
          <img
            src={avatarUrl}
            alt={`${author} avatar`}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{author}</h4>
            <p className="text-gray-500 text-sm">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface TestimonialsSectionProps {
  testimonials?: TestimonialProps[];
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const defaultTestimonials: TestimonialProps[] = [
    {
      quote:
        "Cabinet Portal has transformed how we manage our inventory. The interface is intuitive and the support team is always responsive.",
      author: "Jane Smith",
      company: "Modern Kitchens Inc.",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    },
    {
      quote:
        "We've reduced our ordering errors by 75% since implementing Cabinet Portal. It's been a game-changer for our business.",
      author: "Michael Johnson",
      company: "Elite Cabinetry",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      quote:
        "The reporting features alone have saved us countless hours each month. I can't imagine running our cabinet business without it now.",
      author: "Sarah Williams",
      company: "Custom Cabinet Solutions",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      quote:
        "From day one, Cabinet Portal has exceeded our expectations. The onboarding process was smooth and the platform is incredibly reliable.",
      author: "David Chen",
      company: "Premier Woodworks",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const testimonialsToShow = testimonials || defaultTestimonials;
  const displayCount = 3; // Number of testimonials to show at once

  const nextTestimonial = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex + 1) % (testimonialsToShow.length - displayCount + 1),
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0
        ? testimonialsToShow.length - displayCount
        : prevIndex - 1,
    );
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what cabinet professionals
            like you have to say about our portal.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / displayCount)}%)`,
              }}
            >
              {testimonialsToShow.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/3 px-4 flex-shrink-0">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
