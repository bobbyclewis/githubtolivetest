import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressIndicator from "./ProgressIndicator";
import SignUpStepOne from "./SignUpStepOne";
import SignUpStepTwo from "./SignUpStepTwo";
import SignUpStepThree from "./SignUpStepThree";

interface PersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface BusinessInfo {
  companyName: string;
  businessType: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
}

interface AccountDetails {
  email: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}

interface SignUpProcessProps {
  onComplete?: (data: {
    personalDetails: PersonalDetails;
    businessInfo: BusinessInfo;
    accountDetails: AccountDetails;
  }) => void;
  initialStep?: number;
}

const SignUpProcess = ({
  onComplete = () => {},
  initialStep = 1,
}: SignUpProcessProps) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [formData, setFormData] = useState<{
    personalDetails: PersonalDetails;
    businessInfo: BusinessInfo;
    accountDetails: AccountDetails;
  }>({
    personalDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    businessInfo: {
      companyName: "",
      businessType: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
    },
    accountDetails: {
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
  });

  const handleStepOneNext = (data: PersonalDetails) => {
    setFormData({
      ...formData,
      personalDetails: data,
    });
    setCurrentStep(2);
  };

  const handleStepTwoNext = () => {
    setCurrentStep(3);
  };

  const handleStepTwoPrevious = () => {
    setCurrentStep(1);
  };

  const handleStepThreeBack = () => {
    setCurrentStep(2);
  };

  const handleStepThreeComplete = (data: AccountDetails) => {
    setFormData({
      ...formData,
      accountDetails: data,
    });
    onComplete({
      personalDetails: formData.personalDetails,
      businessInfo: formData.businessInfo,
      accountDetails: data,
    });
  };

  const handleStepClick = (step: number) => {
    if (step < currentStep) {
      setCurrentStep(step);
    }
  };

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-50 rounded-xl shadow-sm">
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={3}
        onStepClick={handleStepClick}
      />

      <div className="mt-8 relative overflow-hidden">
        <AnimatePresence initial={false} mode="wait" custom={currentStep}>
          {currentStep === 1 && (
            <motion.div
              key="step1"
              custom={1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full"
            >
              <SignUpStepOne
                onNext={handleStepOneNext}
                defaultValues={formData.personalDetails}
              />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              custom={2}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full"
            >
              <SignUpStepTwo
                onNext={handleStepTwoNext}
                onPrevious={handleStepTwoPrevious}
                defaultValues={formData.businessInfo}
              />
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              custom={3}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full"
            >
              <SignUpStepThree
                onComplete={handleStepThreeComplete}
                onBack={handleStepThreeBack}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SignUpProcess;
