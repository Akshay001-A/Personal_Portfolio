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

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center max-md:px-4 max-md:py-3">

        {/* Logo */}
        <a href="#home" onClick={() => { setActive("Home"); setMenuOpen(false); }}>
          <h1 className="text-3xl font-bold transition-all duration-300 hover:scale-105 max-md:text-2xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Akshay R
            </span>
          </h1>
        </a>

        {/* Navigation */}
        <ul className="flex items-center gap-8 max-md:hidden">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setActive(item)}
                className={`
                  relative
                  font-medium
                  transition-all
                  duration-300
                  hover:text-cyan-400
                  ${active === item
                    ? "text-cyan-400"
                    : "text-white"
                  }
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:bg-cyan-400
                  after:transition-all
                  after:duration-300
                  ${active === item
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                  }
                `}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="hidden max-md:inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-2xl text-white transition hover:border-cyan-400 hover:text-cyan-400"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      <div
        id="mobile-navigation"
        className={`hidden max-md:block overflow-hidden border-t border-white/10 bg-slate-900/95 transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="px-4 py-2">
          {navItems.map((item) => (
            <li key={item} className="border-b border-white/5 last:border-0">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => { setActive(item); setMenuOpen(false); }}
                tabIndex={menuOpen ? 0 : -1}
                className={`block py-3 text-sm font-medium ${active === item ? "text-cyan-400" : "text-white"}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
