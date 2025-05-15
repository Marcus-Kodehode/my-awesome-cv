import StarsBackground from "./StarsBackground";
import Logo from "./Logo";
import LogoAndTitle from "./LogoAndTitle";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full h-32 overflow-visible pointer-events-none md:h-28">
      <div className="relative h-full max-w-6xl mx-auto overflow-hidden border-b shadow-md pointer-events-auto rounded-b-2xl bg-star-gradient backdrop-blur-md border-highlight">
        <StarsBackground />

        {/* Hovedinnhold */}
        <div className="relative z-10 flex flex-col h-full gap-4 px-6 pt-4 md:flex-row md:items-center md:justify-between">
          {/* Logo + tittel */}
          <div className="flex items-center gap-4">
            <Logo />
            <LogoAndTitle />
          </div>

          {/* Desktop navigasjon */}
          <div className="hidden md:flex">
            <NavBar />
          </div>

          {/* Mobil navigasjon */}
          <div className="self-end pr-4 -mt-2 md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
