import { MenuTabs } from "../ui/custom/menu-tabs";

export function Main() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
      <section className="rounded-3xl bg-surface p-6 shadow-sm">
        <MenuTabs />
      </section>
    </main>
  );
}
