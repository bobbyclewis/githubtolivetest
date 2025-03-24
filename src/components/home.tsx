import React, { useState, useRef } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import Header from "./Header";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import TestimonialsSection from "./TestimonialsSection";
import SignUpProcess from "./SignUpProcess";
import Footer from "./Footer";

const Home: React.FC = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const signUpRef = useRef<HTMLDivElement>(null);

  const handleSignUpClick = () => {
    setIsSignUpOpen(true);
  };

  const handleSignUpComplete = (data: any) => {
    console.log("Sign up completed with data:", data);
    setIsSignUpOpen(false);
    // In a real application, you would handle the sign-up submission here
    // For example, sending the data to an API endpoint
  };

  const scrollToSignUp = () => {
    if (signUpRef.current) {
      signUpRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header onSignUpClick={handleSignUpClick} />

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <HeroSection
          onCtaClick={scrollToSignUp}
          title="Transform Your Cabinet Management"
          subtitle="Streamline operations, reduce errors, and boost productivity with our all-in-one cabinet management solution."
          ctaText="Start Your Free Trial"
          backgroundImage="https://images.unsplash.com/photo-1556909114-44e3e9399e2b?w=1200&q=80"
        />

        {/* Benefits Section */}
        <BenefitsSection
          title="Why Choose Our Cabinet Portal"
          subtitle="Powerful features designed specifically for cabinet professionals"
        />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Sign Up Section (Embedded in page) */}
        <section ref={signUpRef} className="py-16 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of cabinet professionals who are already
              streamlining their operations.
            </p>
          </div>
          <SignUpProcess onComplete={handleSignUpComplete} />
        </section>
      </main>

      {/* Sign Up Dialog (Modal) */}
      <Dialog open={isSignUpOpen} onOpenChange={setIsSignUpOpen}>
        <DialogContent className="sm:max-w-[800px] p-0 bg-transparent border-none shadow-none">
          <SignUpProcess onComplete={handleSignUpComplete} />
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
