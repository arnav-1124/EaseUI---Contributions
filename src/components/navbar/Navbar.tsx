// Navbar.tsx
import { Slot } from "@radix-ui/react-slot";
import React, { forwardRef, useEffect, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";
import gsap from "gsap";
import { Button } from "../Button";

const navbarVariants = cva(
  [
    "w-full",
    "flex items-center justify-between",
    "gap-4",
    "border-b",
    "bg-background/95",
    "backdrop-blur",
    "supports-[backdrop-filter]:bg-background/60",
    "transition-colors",
  ],
  {
    variants: {
      variant: {
        default: "border-border",
        primary: "border-primary/20",
        dark: "border-white/10 bg-slate-950 text-white",
        glass: "border-border/50",
      },
      size: {
        default: "min-h-16 px-6",
        sm: "min-h-12 px-4",
        lg: "min-h-20 px-8",
        xl: "min-h-24 px-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface NavbarProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {
  asChild?: boolean;
  animation?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
}

const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      animation = "fadeIn",
      hoverAnimation = "none",
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "nav";
    const navbarRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (!navbarRef.current || animation === "none") return;
      entranceAnimations[animation]?.(navbarRef.current);
    }, [animation]);

    const handleMouseEnter = () => {
      const el = navbarRef.current;

      if (!el) return;

      hoverAnimations[hoverAnimation]?.(el);
    };

    const handleMouseLeave = () => {
      gsap.to(navbarRef.current, {
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 0.1,
      });
    };

    return (
      <Comp
        ref={(node) => {
          navbarRef.current = node as HTMLElement;
          if (typeof ref === "function") ref(node as HTMLElement);
          else if (ref)
            (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn(navbarVariants({ variant, size }), className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Navbar.displayName = "Navbar";

export { Navbar, navbarVariants };
