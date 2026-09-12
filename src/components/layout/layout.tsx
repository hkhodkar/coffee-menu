import { Footer } from "./footer";
import { Header } from "./header";
import { Main } from "./main";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#F6F1E8]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
