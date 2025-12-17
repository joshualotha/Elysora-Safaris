"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Wand2 } from "lucide-react";
import { generateItineraryAction } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  destinations: z.string().min(1, "Please enter at least one destination."),
  duration: z.coerce.number().min(1, "Duration must be at least 1 day."),
  interests: z.string().min(1, "Please list at least one interest."),
  budget: z.enum(["budget", "mid-range", "luxury"]),
  travelStyle: z.string().min(1, "Please select a travel style."),
  accommodationPreferences: z.string().min(1, "Please select accommodation preference."),
  groupSize: z.coerce.number().min(1, "Group size must be at least 1."),
  specialRequirements: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function DynamicItineraryGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [itineraryResult, setItineraryResult] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destinations: "Serengeti, Ngorongoro",
      duration: 7,
      interests: "wildlife, photography",
      budget: "mid-range",
      travelStyle: "lodge-based",
      accommodationPreferences: "tented camps",
      groupSize: 2,
      specialRequirements: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    setItineraryResult(null);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    const result = await generateItineraryAction(formData);

    if (result.error) {
      toast({
        title: "Error Generating Itinerary",
        description: typeof result.error === 'string' ? result.error : "An unknown error occurred.",
        variant: "destructive",
      });
    } else if (result.data) {
      setItineraryResult(result.data.itinerary);
    }
    setIsLoading(false);
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="destinations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destinations</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Serengeti, Zanzibar" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration (days)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interests</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., wildlife, photography, culture" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="budget">Budget</SelectItem>
                      <SelectItem value="mid-range">Mid-range</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="travelStyle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Travel Style</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., lodge-based, camping" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="accommodationPreferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Accommodation</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., luxury lodges, tented camps" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="groupSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Group Size</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="specialRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requirements</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., dietary needs, accessibility" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" disabled={isLoading} size="lg" className="w-full md:w-auto">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Generate My Itinerary
          </Button>
        </form>
      </Form>
      
      <AnimatePresence>
      {(isLoading || itineraryResult) && (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-headline font-bold mb-4">Your Custom Itinerary</h3>
              {isLoading && (
                <div className="flex flex-col items-center justify-center gap-4 py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="text-muted-foreground">Our AI is crafting your dream safari...</p>
                </div>
              )}
              {itineraryResult && (
                <div className="prose prose-lg max-w-none text-foreground whitespace-pre-wrap font-body">
                  {itineraryResult}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
