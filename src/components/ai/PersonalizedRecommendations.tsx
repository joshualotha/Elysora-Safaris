"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { getRecommendationsAction } from "@/app/actions";
import {
  PersonalizedSafariRecommendationsOutput
} from "@/ai/flows/personalized-safari-recommendations";

import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const formSchema = z.object({
  budget: z.enum(["budget", "mid-range", "luxury"]),
  interests: z.string().min(3, "Please tell us your interests."),
  travelDates: z.string().min(3, "Please provide your preferred travel time."),
});

type FormValues = z.infer<typeof formSchema>;

export default function PersonalizedRecommendations() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] =
    useState<PersonalizedSafariRecommendationsOutput['recommendations'] | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      budget: "mid-range",
      interests: "",
      travelDates: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    setRecommendations(null);

    const formData = new FormData();
    formData.append("budget", data.budget);
    formData.append("interests", data.interests);
    formData.append("travelDates", data.travelDates);

    const result = await getRecommendationsAction(formData);

    if (result.error) {
       toast({
        title: "Error Getting Recommendations",
        description: typeof result.error === 'string' ? result.error : "An unknown error occurred.",
        variant: "destructive",
      });
    } else if (result.data) {
      setRecommendations(result.data.recommendations);
    }
    setIsLoading(false);
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Budget</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
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
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Interests</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., photography, wildlife" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="travelDates"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Travel Time</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., June-July, winter" {...field} />
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
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Get Recommendations
          </Button>
        </form>
      </Form>
      
      <AnimatePresence>
        {isLoading && (
            <motion.div
                key="loader"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-8 text-center"
            >
                <div className="flex flex-col items-center justify-center gap-4 py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="text-muted-foreground">Finding your perfect safari...</p>
                </div>
            </motion.div>
        )}
        {recommendations && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <h3 className="text-2xl font-headline font-bold mb-4">Here are your personalized recommendations:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((rec, index) => (
                 <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="font-headline">{rec.safariName}</CardTitle>
                    <CardDescription>{rec.duration} | {rec.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{rec.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href={rec.link || '#'}>Learn More</Link>
                    </Button>
                  </div>
                </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
