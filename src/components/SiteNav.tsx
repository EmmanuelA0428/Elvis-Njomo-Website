import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

/** Drop shadows for inner pages (solid dark bg). */
const navLift =
  "drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)] drop-shadow-[0_0_28px_rgba(0,0,0,0.55)]";

const SiteNav = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const lift = isHome ? "nav-hero-contrast" : navLift;

  const linkClass = ({ isActive }: { isActive: boolean }) =>
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          to="/"
          className={cn(
            "font-display text-lg font-bold tracking-tight transition-colors",
            lift,
            isHome ? "text-white hover:text-primary" : "text-foreground hover:text-primary",
          )}
        >
          Elvis Njomo
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-x-6 gap-y-1 sm:gap-x-8">
          <li>
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/photos" className={linkClass}>
              Photos
            </NavLink>
          </li>
          <li>
            <NavLink to="/videos" className={linkClass}>
              Videos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SiteNav;
