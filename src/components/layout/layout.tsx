import { Footer } from "./footer";
import { Header } from "./header";
import { Main } from "./main";

export function Layout() {
  return (
    <div className="min-h-screen bg-canvas">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
