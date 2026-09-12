import { MenuTabs } from "../ui/custom/menu-tabs";

export function Main() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6">
      <section className="rounded-2xl bg-surface p-4 shadow-sm sm:rounded-3xl sm:p-6">
        <MenuTabs />
      </section>
    </main>
  );
}
