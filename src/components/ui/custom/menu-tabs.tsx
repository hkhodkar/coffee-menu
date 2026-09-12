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
      <div className="sticky top-0 z-10 -mx-4 flex items-center gap-2 bg-surface/95 px-4 py-3 backdrop-blur-sm sm:-mx-6 sm:gap-3 sm:px-6">
        {/* balances the toggle on the right so the tabs stay centred */}
        <div className="hidden size-9 shrink-0 sm:block" aria-hidden />

        <TabsList className="no-scrollbar mx-auto flex w-full max-w-full justify-start gap-1 overflow-x-auto rounded-full bg-brand-soft p-1 sm:w-fit sm:flex-wrap sm:justify-center sm:gap-2">
          {CATEGORIES.map((category) => (
            <TabsTrigger
              key={category.value}
              value={category.value}
              className="shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-brand data-[state=active]:bg-brand data-[state=active]:text-brand-contrast sm:px-5 sm:py-2 sm:text-base"
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

            <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
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
