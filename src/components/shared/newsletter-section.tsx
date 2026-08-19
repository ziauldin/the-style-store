"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection({
  variant = "default",
}: {
  variant?: "default" | "footer";
}) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (variant === "footer") {
    return (
      <form onSubmit={onSubmit} className="mt-4">
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <div className="flex gap-2">
          <Input
            id="footer-email"
            type="email"
            required
            placeholder="Email address"
            className="border-white/20 bg-white/5 text-white placeholder:text-white/40"
          />
          <Button type="submit" variant="inverse" size="sm">
            Join
          </Button>
        </div>
        {submitted ? (
          <p className="mt-2 text-xs text-gold">Thank you. We’ll keep this visual-only for now.</p>
        ) : null}
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <Input type="email" required placeholder="Email address" aria-label="Email address" />
      <Button type="submit">Join</Button>
    </form>
  );
}
