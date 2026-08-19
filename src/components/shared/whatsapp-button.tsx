import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WhatsAppButton({
  message,
  className,
  children = "Chat With Us on WhatsApp",
}: {
  message?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Button asChild variant="gold" className={cn(className)}>
      <a href={getWhatsAppUrl(message)} target="_blank" rel="noreferrer">
        <MessageCircle className="h-4 w-4" />
        {children}
      </a>
    </Button>
  );
}
