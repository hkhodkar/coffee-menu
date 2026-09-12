export function Header() {
  return (
    <header className="px-4 py-8 text-center sm:px-6">
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-brand-accent sm:text-sm sm:tracking-[0.3em]">
        Coffee House
      </p>

      <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
        Oak & Ember
      </h1>

      <p className="mx-auto mt-3 max-w-xl text-base leading-6 text-ink-soft sm:mt-4 sm:text-lg sm:leading-7">
        Crafted coffee. Quiet moments.
      </p>
    </header>
  );
}
