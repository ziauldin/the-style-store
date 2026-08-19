import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { REVIEW_VIDEOS } from "@/data/images";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-muted py-20">
      <Container>
        <SectionHeading
          eyebrow="Customer Notes"
          title="What our customers say"
          description="Written notes, plus videos customers have shared with us after wearing their pieces."
        />

        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 no-scrollbar">
          {REVIEW_VIDEOS.map((video) => (
            <figure
              key={video.id}
              className="w-[260px] shrink-0 snap-start overflow-hidden border border-border bg-ivory sm:w-[300px]"
            >
              <div className="relative aspect-[3/4] bg-black">
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster={video.poster}
                  aria-label={`${video.name} from ${video.city}: ${video.caption}`}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
              <figcaption className="p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-gold">
                  Shared with us
                </p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">
                  {video.caption}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {video.name} · {video.city}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.id} className="border border-border bg-ivory p-6">
              <div className="flex gap-1">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {item.name} · {item.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
