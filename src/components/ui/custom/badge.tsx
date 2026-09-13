import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CardBadgeVariant = "popular" | "available" | "soldout" | "price";

const VARIANTS: Record<CardBadgeVariant, string> = {
  popular:
    "bg-brand/90 text-brand-contrast backdrop-blur-sm text-[10px] sm:text-[11px]",
  available:
    "bg-available-soft/90 text-available backdrop-blur-sm text-[10px] sm:text-[11px]",
  soldout:
    "bg-soldout-soft/90 text-soldout backdrop-blur-sm text-[10px] sm:text-[11px]",
  price: "bg-brand-soft text-brand text-xs font-semibold",
};

export type CardBadgeProps = {
  variant: CardBadgeVariant;
  className?: string;
  children: ReactNode;
};

export function CardBadge({ variant, className, children }: CardBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full px-1.5 py-0.5 font-medium sm:px-2",
        VARIANTS[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
