import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium tracking-[0.08em] uppercase transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-black text-white hover:bg-charcoal",
        secondary:
          "border border-black bg-transparent text-black hover:bg-black hover:text-white",
        gold:
          "border border-gold text-black hover:bg-gold hover:text-black",
        ghost: "text-black hover:text-gold",
        inverse:
          "bg-white text-black hover:bg-ivory",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-12 px-8",
        icon: "h-10 w-10 tracking-normal",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
