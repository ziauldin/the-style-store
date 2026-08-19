"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <Container className="grid gap-12 py-16 lg:grid-cols-2">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-gold">Contact</p>
        <h1 className="font-display mt-3 text-4xl">We’d love to help</h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          For fabric advice, sizing, colour, or order questions, write to us or
          message on WhatsApp. This form is a visual prototype and does not send to a server.
        </p>
        <div className="mt-8 space-y-3 text-sm">
          <p>Email: {SITE.email}</p>
          <p>Instagram: @thestylestore</p>
          <p>TikTok: @thestylestore</p>
        </div>
        <div className="mt-6">
          <WhatsAppButton />
        </div>
      </div>
      <form onSubmit={onSubmit} className="space-y-4 border border-border bg-white p-6">
        {sent ? (
          <p className="py-12 text-center font-display text-2xl">
            Thank you. Your message has been noted.
          </p>
        ) : (
          <>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none focus:border-gold"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </>
        )}
      </form>
    </Container>
  );
}
