import { HeartHandshake, Layers, MapPinned, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";

const benefits = [
  {
    icon: HeartHandshake,
    title: "Handmade With Care",
    text: "Finishing, fabric, and proportion come before trends.",
  },
  {
    icon: Layers,
    title: "Quality Materials",
    text: "Lawn, cotton, khaddar, wool, and home textiles chosen to last.",
  },
  {
    icon: MapPinned,
    title: "Nationwide Delivery",
    text: "Orders ship across Pakistan with careful packing.",
  },
  {
    icon: MessageCircle,
    title: "Customer Support",
    text: "Questions on size, fabric, or colour? Message us on WhatsApp.",
  },
];

export function Benefits() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="Why Shop With Us" title="Quiet standards, kept." />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center sm:text-left">
              <benefit.icon className="mx-auto h-6 w-6 text-gold sm:mx-0" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-2xl">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
