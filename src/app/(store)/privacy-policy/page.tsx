import type { Metadata } from "next";
import { PolicyLayout, policyMetadata } from "@/components/shared/policy-layout";

export const metadata: Metadata = policyMetadata(
  "Privacy Policy",
  "How The Style Store intends to handle customer information.",
);

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      description="Placeholder policy for this static prototype. No personal data is collected by a backend yet."
    >
      <h2 className="font-display text-2xl">What we collect later</h2>
      <p>
        In the live store, we expect to collect contact details, shipping addresses, and order
        history to fulfil purchases. This prototype stores cart and wishlist data only in your
        browser.
      </p>
      <h2 className="font-display text-2xl">WhatsApp</h2>
      <p>
        If you message us on WhatsApp, that conversation is handled on WhatsApp’s platform
        according to their terms.
      </p>
      <h2 className="font-display text-2xl">Cookies</h2>
      <p>
        The production site may use essential cookies for sessions and analytics. None are required
        for this static exploration.
      </p>
    </PolicyLayout>
  );
}
