import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const formSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" }),
    confirmPassword: z.string(),
    termsAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

interface SignUpStepThreeProps {
  onComplete?: (data: FormValues) => void;
  onBack?: () => void;
}

const SignUpStepThree = ({
  onComplete = () => {},
  onBack = () => {},
}: SignUpStepThreeProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      onComplete(data);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md p-8 mx-auto bg-white shadow-md rounded-lg">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Account Created Successfully!
          </h2>
          <p className="text-gray-600">
            Your cabinet portal account has been created. You can now access all
            the features of our platform.
          </p>
          <Button
            className="w-full mt-4"
            onClick={() => (window.location.href = "/dashboard")}
          >
            Go to Dashboard
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md p-6 mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        Create Your Account
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...register("email")}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <div className="flex items-center text-red-500 text-sm mt-1">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{errors.email.message}</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            {...register("password")}
            className={errors.password ? "border-red-500" : ""}
          />
          {errors.password && (
            <div className="flex items-center text-red-500 text-sm mt-1">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{errors.password.message}</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            {...register("confirmPassword")}
            className={errors.confirmPassword ? "border-red-500" : ""}
          />
          {errors.confirmPassword && (
            <div className="flex items-center text-red-500 text-sm mt-1">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>{errors.confirmPassword.message}</span>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <Checkbox id="termsAccepted" {...register("termsAccepted")} />
          <Label
            htmlFor="termsAccepted"
            className="text-sm font-normal cursor-pointer"
          >
            I agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </Label>
        </div>
        {errors.termsAccepted && (
          <div className="flex items-center text-red-500 text-sm mt-1">
            <AlertCircle className="h-4 w-4 mr-1" />
            <span>{errors.termsAccepted.message}</span>
          </div>
        )}

        <div className="flex justify-between mt-6 pt-4 border-t border-gray-200">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default SignUpStepThree;
