import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DrinkCard } from "./drink-card";
import { MENUITEMS } from "@/assets/DATA";
import { ThemeToggle } from "./theme-toggle";

const CATEGORIES = [
  { value: "hot-drinks", label: "Hot Drinks" },
  { value: "cold-drinks", label: "Cold Drinks" },
  { value: "pastries", label: "Pastries" },
  { value: "desserts", label: "Desserts" },
];

export function MenuTabs() {
  const menuItems = MENUITEMS;

  return (
    <Tabs defaultValue="hot-drinks" className="w-full">
      <div className="sticky top-0 z-10 -mx-6 flex items-center gap-3 bg-surface/95 px-6 py-3 backdrop-blur-sm">
        {/* balances the toggle on the right so the tabs stay centred */}
        <div className="size-9 shrink-0" aria-hidden />

        <TabsList className="mx-auto flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-full bg-brand-soft p-1">
          {CATEGORIES.map((category) => (
            <TabsTrigger
              key={category.value}
              value={category.value}
              className="rounded-full px-5 py-2 text-brand data-[state=active]:bg-brand data-[state=active]:text-brand-contrast"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <ThemeToggle />
      </div>

      {CATEGORIES.map((category) => {
        const items = menuItems.filter(
          (item) => item.category === category.value
        );

        return (
          <TabsContent key={category.value} value={category.value}>
            <p className="mb-4 text-center text-xs uppercase tracking-[0.2em] text-ink-muted">
              {items.length} items
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {items.map((item) => (
                <DrinkCard
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                  isAvailable={item.isAvailable}
                  isPopular={item.isPopular}
                />
              ))}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
