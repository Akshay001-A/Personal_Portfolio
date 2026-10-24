
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Projects",
    "Contact",
  ];

  const handleNavClick = (item: string) => {
    setActive(item);
    setMenuOpen(false);
  };

  const navLinkClass = (item: string) =>
    `relative block py-2 font-medium transition-colors duration-300 hover:text-cyan-400 ${
      active === item ? "text-cyan-400" : "text-white"
    }`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-[68px] max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("Home")}
          className="shrink-0"
        >
          <h1 className="text-2xl font-bold transition-transform duration-300 hover:scale-105 sm:text-3xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Akshay R
            </span>
          </h1>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => handleNavClick(item)}
                className={`${navLinkClass(item)} after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300 ${
                  active === item
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-cyan-400 hover:text-cyan-400 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-slate-900/95 transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-6">
          {navItems.map((item) => (
            <li key={item} className="border-b border-white/5 last:border-0">
              <a
                href={`#${item.toLowerCase()}`}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => handleNavClick(item)}
                className={`${navLinkClass(item)} py-3`}
              >
                {item}
                {active === item && (
                  <span className="absolute bottom-2 left-0 h-0.5 w-8 bg-cyan-400" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
