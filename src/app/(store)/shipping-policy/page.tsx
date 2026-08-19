import type { Metadata } from "next";
import { PolicyLayout, policyMetadata } from "@/components/shared/policy-layout";

export const metadata: Metadata = policyMetadata(
  "Shipping Policy",
  "Nationwide delivery information for The Style Store.",
);

export default function ShippingPolicyPage() {
  return (
    <PolicyLayout
      title="Shipping Policy"
      description="Placeholder policy for this static prototype. Update before launch."
    >
      <h2 className="font-display text-2xl">Nationwide delivery</h2>
      <p>
        We currently deliver across Pakistan. Orders are typically packed within 1–2 working
        days. Delivery timelines vary by city and usually range from 2–6 working days after dispatch.
      </p>
      <h2 className="font-display text-2xl">Charges</h2>
      <p>
        Delivery charges are calculated at checkout in the live store. For this prototype, shipping
        is shown as an estimate only and is not billed.
      </p>
      <h2 className="font-display text-2xl">Packing</h2>
      <p>
        Pieces are folded and packed to protect embroidery, lace, and home textiles in transit.
      </p>
    </PolicyLayout>
  );
}
