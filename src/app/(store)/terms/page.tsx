import type { Metadata } from "next";
import { PolicyLayout, policyMetadata } from "@/components/shared/policy-layout";

export const metadata: Metadata = policyMetadata(
  "Terms & Conditions",
  "Terms of use for The Style Store website.",
);

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      description="Placeholder terms for this static prototype. Update with legal review before launch."
    >
      <h2 className="font-display text-2xl">Use of the site</h2>
      <p>
        This website is a design and experience prototype. Prices, stock, and product details are
        mock data and may change before launch.
      </p>
      <h2 className="font-display text-2xl">Orders</h2>
      <p>
        Placing an order in this prototype does not create a real purchase, payment, or fulfilment
        obligation. The confirmation screen is simulated.
      </p>
      <h2 className="font-display text-2xl">Intellectual property</h2>
      <p>
        The Style Store name, logo, and site design are presented for brand evaluation. Product
        photography currently uses licensed-style placeholder imagery for demonstration.
      </p>
    </PolicyLayout>
  );
}
