import PageHeader from "@/components/shared/PageHeader";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Here's how we handle your information."
        imageId="privacy-hero"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="prose lg:prose-lg max-w-4xl mx-auto text-muted-foreground prose-h2:font-headline prose-h2:text-foreground">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you inquire about a safari, book a trip, or subscribe to our newsletter. This may include:
            </p>
            <ul>
              <li>Personal identification information (Name, Email, Phone number, Country of residence)</li>
              <li>Travel preferences and details (interests, dates, group size, special requirements)</li>
              <li>Payment information (though we often use secure third-party processors)</li>
            </ul>
            <p>
              We also collect some information automatically, such as your IP address and browsing behavior on our site, through cookies and similar technologies.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              Your information is used for the following purposes:
            </p>
            <ul>
              <li>To create and manage your safari booking.</li>
              <li>To communicate with you about your trip and answer your inquiries.</li>
              <li>To personalize your experience and provide relevant recommendations.</li>
              <li>To process payments for our services.</li>
              <li>To send you marketing communications and newsletters, if you have opted in.</li>
              <li>To improve our website and services.</li>
            </ul>

            <h2>3. Data Protection</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers, and sensitive information is encrypted. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except to trusted third parties who assist us in operating our website or servicing you (e.g., hotels, airlines for bookings), so long as those parties agree to keep this information confidential.
            </p>

            <h2>4. Cookie Policy</h2>
            <p>
              Our website uses "cookies" to enhance your experience. Cookies are small files that a site transfers to your computer's hard drive through your Web browser that enables the site's systems to recognize your browser and capture and remember certain information. We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Request that we correct any incorrect data.</li>
              <li>Request that we delete your data.</li>
              <li>Object to us processing your data.</li>
              <li>Opt-out of marketing communications at any time.</li>
            </ul>
            <p>
              To exercise these rights, please contact us at <a href="mailto:privacy@elysora.com">privacy@elysora.com</a>.
            </p>

            <h2>6. Changes to this Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            <p>This policy was last updated on {new Date().toLocaleDateString()}.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
