import type { Metadata } from "next";
import { PolicyLayout, policyMetadata } from "@/components/shared/policy-layout";

export const metadata: Metadata = policyMetadata(
  "Return Policy",
  "Returns and exchanges for The Style Store.",
);

export default function ReturnPolicyPage() {
  return (
    <PolicyLayout
      title="Return Policy"
      description="Placeholder policy for this static prototype. Update before launch."
    >
      <h2 className="font-display text-2xl">7-day returns</h2>
      <p>
        Unused items in original condition and packaging may be returned within 7 days of delivery.
        Handmade pieces may show minor variations; these are not considered defects.
      </p>
      <h2 className="font-display text-2xl">Exchanges</h2>
      <p>
        Size exchanges are offered subject to availability. Please share clear photos if an item
        arrived damaged.
      </p>
      <h2 className="font-display text-2xl">Non-returnable</h2>
      <p>
        Items that have been washed, altered, or used cannot be returned. Innerwear or sealed
        personal-care add-ons, if introduced later, would follow a stricter rule.
      </p>
    </PolicyLayout>
  );
}
