"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Overlay>) {
  return (
    <Dialog.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/40 animate-fade-in",
        className,
      )}
      {...props}
    />
  );
}

export function SheetContent({
  side = "right",
  className,
  children,
  title,
  ...props
}: React.ComponentProps<typeof Dialog.Content> & {
  side?: "left" | "right";
  title: string;
}) {
  return (
    <Dialog.Portal>
      <SheetOverlay />
      <Dialog.Content
        className={cn(
          "fixed top-0 z-50 flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl",
          side === "right"
            ? "right-0 animate-slide-in-right"
            : "left-0 animate-slide-in-left",
          className,
        )}
        {...props}
      >
        <Dialog.Title className="sr-only">{title}</Dialog.Title>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export function SheetHeader({
  title,
  onClose,
}: {
  title: string;
  onClose?: () => void;
}) {
  return (
    <div className="flex items-center justify-between border-b border-border px-5 py-4">
      <h2 className="font-display text-xl">{title}</h2>
      <Dialog.Close
        onClick={onClose}
        className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-muted"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </Dialog.Close>
    </div>
  );
}
