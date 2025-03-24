import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Building2, MapPin, Phone, Store } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  businessType: z.string().min(2, {
    message: "Business type is required.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  city: z.string().min(2, {
    message: "City is required.",
  }),
  state: z.string().min(2, {
    message: "State is required.",
  }),
  zipCode: z.string().min(5, {
    message: "Zip code must be at least 5 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface SignUpStepTwoProps {
  onNext?: () => void;
  onPrevious?: () => void;
  defaultValues?: FormValues;
}

const SignUpStepTwo = ({
  onNext = () => {},
  onPrevious = () => {},
  defaultValues = {
    companyName: "",
    businessType: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
  },
}: SignUpStepTwoProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    onNext();
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        Business Information
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <FormControl>
                    <Input
                      className="pl-10"
                      placeholder="Acme Cabinets"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Type</FormLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                    <Store className="h-4 w-4" />
                  </div>
                  <FormControl>
                    <Input
                      className="pl-10"
                      placeholder="Cabinet Manufacturer"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <FormControl>
                    <Input
                      className="pl-10"
                      placeholder="123 Cabinet St"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Woodville" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder="CA" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zip Code</FormLabel>
                  <FormControl>
                    <Input placeholder="90210" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                      <Phone className="h-4 w-4" />
                    </div>
                    <FormControl>
                      <Input
                        className="pl-10"
                        placeholder="(555) 123-4567"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={onPrevious}>
              Previous
            </Button>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUpStepTwo;
