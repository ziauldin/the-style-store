import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

export function WhatsAppCta() {
  return (
    <section className="border-y border-border bg-white py-16">
      <Container className="text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-gold">
          Concierge
        </p>
        <h2 className="font-display mt-3 text-3xl sm:text-4xl">
          Need Help Choosing?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
          Have a question about fabric, sizing, colours, or availability? Send a
          message and we’ll help you pick with care.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton />
        </div>
      </Container>
    </section>
  );
}
