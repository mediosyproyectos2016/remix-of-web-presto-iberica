import { useState } from "react";
import { Menu, X } from "lucide-react";
import { TopBar } from "./header/TopBar";
import { Logo } from "./header/Logo";
import { DesktopNav } from "./header/DesktopNav";
import { MobileNav } from "./header/MobileNav";
import { SearchButton } from "./header/SearchButton";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
        <TopBar />

        {/* Main header */}
        <div className="container-presto">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2 hover:bg-white/10 rounded-full transition-colors text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <div className="flex-shrink-0 relative z-10">
              <Logo />
            </div>

            <div className="hidden lg:flex flex-1 ml-8 xl:ml-12">
              <DesktopNav />
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <SearchButton />
            </div>
          </div>
        </div>
      </header>

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
