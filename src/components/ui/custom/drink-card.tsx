import { Card, CardContent } from "@/components/ui/card";
import type { menuItem } from "@/model/menu-item.model";

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
      className={`group flex w-full flex-col overflow-hidden border-line bg-surface p-0 shadow-sm transition-all duration-300 ${
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
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {isPopular && isAvailable && (
          <span className="absolute left-2 top-2 rounded-full bg-brand/90 px-2 py-0.5 text-[11px] font-medium text-brand-contrast backdrop-blur-sm">
            Popular
          </span>
        )}

        <span
          className={`absolute right-2 top-2 rounded-full px-2 py-0.5 text-[11px] font-medium backdrop-blur-sm ${
            isAvailable
              ? "bg-available-soft/90 text-available"
              : "bg-soldout-soft/90 text-soldout"
          }`}
        >
          {isAvailable ? "Available" : "Sold Out"}
        </span>
      </div>

      <CardContent className="flex flex-1 flex-col p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
            {name}
          </h3>

          <span className="shrink-0 rounded-full bg-brand-soft px-2 py-0.5 text-xs font-semibold text-brand">
            {price} AED
          </span>
        </div>

        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-soft">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
