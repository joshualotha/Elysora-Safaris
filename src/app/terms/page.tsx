import PageHeader from "@/components/shared/PageHeader";

export default function TermsAndConditionsPage() {
  return (
    <div>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read our terms and conditions carefully before booking your safari."
        imageId="terms-hero"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="prose lg:prose-lg max-w-4xl mx-auto text-muted-foreground prose-h2:font-headline prose-h2:text-foreground">
            <h2>1. Booking & Payment</h2>
            <p>
              A deposit of 30% of the total safari cost is required to confirm a booking. The remaining balance is due 60 days prior to the start of your safari. If a booking is made within 60 days of the departure date, full payment is required at the time of booking. Payments can be made by bank transfer or credit card (a processing fee may apply).
            </p>

            <h2>2. Cancellation Policy</h2>
            <p>
              Cancellations must be made in writing. The following cancellation fees apply:
            </p>
            <ul>
              <li>61 days or more prior to departure: Loss of deposit.</li>
              <li>60-31 days prior to departure: 50% of the total cost.</li>
              <li>30 days or less prior to departure: 100% of the total cost.</li>
            </ul>
            <p>
              We reserve the right to cancel any trip due to unforeseen circumstances, in which case a full refund will be provided. We strongly recommend purchasing comprehensive travel insurance.
            </p>

            <h2>3. Travel Insurance</h2>
            <p>
              Comprehensive travel and medical insurance is mandatory for all clients. The insurance must cover trip cancellation, medical expenses, personal accident, and repatriation. We will require proof of your insurance policy before you embark on your safari.
            </p>

            <h2>4. Changes to Itinerary</h2>
            <p>
              While we will do our utmost to adhere to the planned itinerary, we reserve the right to make changes due to local conditions, weather, or other unforeseen circumstances. Any significant changes will be communicated to you as soon as possible.
            </p>

            <h2>5. Liability</h2>
            <p>
              Elysora Safaris acts only as an agent for the various independent suppliers that provide accommodation, transportation, and other services. We are not liable for any injury, damage, loss, accident, delay, or irregularity that may be occasioned by any cause beyond our control.
            </p>

             <h2>6. Health & Documents</h2>
            <p>
             Clients are responsible for ensuring they have the necessary vaccinations, a valid passport, and any required visas for entry into Tanzania. We can provide advice, but it is the client's responsibility to ensure all documentation is in order.
            </p>

            <p>This policy was last updated on {new Date().toLocaleDateString()}.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
