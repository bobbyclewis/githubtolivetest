import React from "react";
import { Check, Circle } from "lucide-react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepTitles?: string[];
  onStepClick?: (step: number) => void;
}

const ProgressIndicator = ({
  currentStep = 1,
  totalSteps = 3,
  stepTitles = ["Personal Details", "Business Information", "Account Creation"],
  onStepClick,
}: ProgressIndicatorProps) => {
  // Ensure we have enough titles for all steps
  const titles = [...stepTitles];
  while (titles.length < totalSteps) {
    titles.push(`Step ${titles.length + 1}`);
  }

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isClickable = isCompleted && onStepClick;

          return (
            <React.Fragment key={stepNumber}>
              {/* Step indicator */}
              <div className="flex flex-col items-center">
                <button
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isClickable ? "cursor-pointer" : "cursor-default"} ${
                    isCompleted
                      ? "bg-green-600 text-white"
                      : isCurrent
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-500"
                  }`}
                  onClick={() => isClickable && onStepClick(stepNumber)}
                  disabled={!isClickable}
                  aria-label={`Step ${stepNumber}: ${titles[index]}`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span>{stepNumber}</span>
                  )}
                </button>
                <span
                  className={`mt-2 text-sm font-medium ${
                    isCurrent ? "text-blue-600" : "text-gray-500"
                  }`}
                >
                  {titles[index]}
                </span>
              </div>

              {/* Connector line between steps */}
              {index < totalSteps - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    stepNumber < currentStep ? "bg-green-600" : "bg-gray-200"
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressIndicator;
