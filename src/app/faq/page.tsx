import PageHeader from "@/components/shared/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FAQPage() {
  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about planning your Tanzanian safari with us."
        imageId="faq-hero"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {Object.entries(faqs).map(([category, questions]) => (
              <div key={category} className="mb-12">
                <h2 className="text-3xl font-headline font-bold mb-6">{category}</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {questions.map((faq, index) => (
                    <AccordionItem value={`item-${category}-${index}`} key={index} className="bg-sand rounded-xl px-6">
                      <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
            
             <div className="text-center mt-16 p-8 bg-sand rounded-2xl">
                 <h2 className="text-3xl font-headline font-bold mb-4">Still Have Questions?</h2>
                 <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Our team of safari experts is here to help you plan the perfect trip. Don't hesitate to reach out with any questions you may have.
                 </p>
                 <Button asChild size="lg">
                    <Link href="/contact">Contact Us</Link>
                 </Button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
