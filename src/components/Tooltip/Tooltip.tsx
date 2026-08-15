import React from "react";
import { Slot } from "@radix-ui/react-slot";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/libs/utils";
import type { p } from "node_modules/react-router/dist/development/index-react-server-client-B0vnxMMk.d.mts";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;

// Trigger
const TooltipTrigger = TooltipPrimitive.Trigger;

// Content
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "bg-foreground text-background px-3 py-1.5 rounded-md text-sm animate-fadeIn",
        className,
      )}
      {...props}
    />
  );
});

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
