import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#what-is-a-shark", label: "What Is a Shark?" },
  { href: "#evolution", label: "Evolution" },
  { href: "#taxonomy", label: "Taxonomy & Diversity" },
  { href: "#thresher-sharks", label: "Thresher Sharks" },
  { href: "#comparison", label: "Species Comparison" },
  { href: "#conservation", label: "Conservation" },
  { href: "#sources", label: "Sources & Credits" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand">
          <span aria-hidden="true">🦈</span> Thresher Shark Guide
        </a>
        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
        <nav
          id="primary-navigation"
          className={`navbar__nav ${open ? "navbar__nav--open" : ""}`}
          aria-label="Primary"
        >
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
