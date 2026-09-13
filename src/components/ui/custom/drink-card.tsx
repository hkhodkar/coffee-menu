import { Card, CardContent } from "@/components/ui/card";
import type { menuItem } from "@/model/menu-item.model";
import { CardBadge } from "./badge";

export type DrinkCardProps = Pick<
  menuItem,
  "name" | "description" | "price" | "image" | "isAvailable" | "isPopular"
>;

export function DrinkCard({
  name,
  description,
  price,
  image,
  isAvailable,
  isPopular,
}: DrinkCardProps) {
  return (
    <Card
      className={`group flex w-full flex-col overflow-hidden rounded-2xl bg-surface shadow-sm ring-1 ring-line transition-all duration-300 [--card-spacing:0px] ${
        isAvailable
          ? "hover:-translate-y-1 hover:shadow-lg"
          : "grayscale opacity-60"
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {isPopular && isAvailable && (
          <CardBadge
            variant="popular"
            className="absolute left-1.5 top-1.5 sm:left-2 sm:top-2"
          >
            Popular
          </CardBadge>
        )}

        <CardBadge
          variant={isAvailable ? "available" : "soldout"}
          className="absolute right-1.5 top-1.5 sm:right-2 sm:top-2"
        >
          {isAvailable ? "Available" : "Sold Out"}
        </CardBadge>
      </div>

      <CardContent className="flex flex-1 flex-col p-2.5 sm:p-3">
        <div className="flex flex-wrap items-start justify-between gap-x-2 gap-y-1">
          <h3 className="min-w-0 flex-1 text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
            {name}
          </h3>

          <CardBadge variant="price">{price} AED</CardBadge>
        </div>

        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-soft">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
