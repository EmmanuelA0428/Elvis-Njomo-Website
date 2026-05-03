import type { NavLinkProps } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

/** Drop shadows for inner pages (solid dark bg). */
const navLift =
  "drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)] drop-shadow-[0_0_28px_rgba(0,0,0,0.55)]";

const SiteNav = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const lift = isHome ? "nav-hero-contrast" : navLift;

  const sectionLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "text-sm font-semibold tracking-wide transition-colors",
      lift,
      isHome
        ? isActive
          ? "text-primary"
          : "text-white hover:text-primary"
        : isActive
          ? "text-primary"
          : "text-foreground/95 hover:text-primary",
    );

  const homeLinkClass: NavLinkProps["className"] = ({ isActive }) =>
    cn(
      "shrink-0 text-sm font-semibold tracking-wide transition-colors",
      lift,
      isHome
        ? isActive
          ? "text-primary"
          : "text-white hover:text-primary"
        : isActive
          ? "text-primary"
          : "text-foreground/95 hover:text-primary",
    );

  const sheetLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "block rounded-md py-3 text-lg font-semibold transition-colors",
      isActive ? "text-primary" : "text-foreground hover:text-primary",
    );

  const hamburgerClass = cn(
    "md:hidden",
    isHome && "text-white nav-hero-contrast hover:bg-white/10 hover:text-white",
    !isHome && "text-foreground hover:bg-muted",
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-transparent">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6">
        <NavLink to="/" end className={homeLinkClass}>
          Home
        </NavLink>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-x-8 md:flex">
            <NavLink to="/about" className={sectionLinkClass}>
              About
            </NavLink>
            <NavLink to="/photos" className={sectionLinkClass}>
              Photos
            </NavLink>
            <NavLink to="/videos" className={sectionLinkClass}>
              Videos
            </NavLink>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={hamburgerClass} aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1">
                <SheetClose asChild>
                  <NavLink to="/about" className={sheetLinkClass}>
                    About
                  </NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink to="/photos" className={sheetLinkClass}>
                    Photos
                  </NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink to="/videos" className={sheetLinkClass}>
                    Videos
                  </NavLink>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default SiteNav;
