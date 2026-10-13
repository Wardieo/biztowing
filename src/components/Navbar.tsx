import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { business } from "../utils/config";
export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="BizTowing home">
      BizTowing
    </Link>
  );
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  return (
    <>
      <div className="topbar">
        <span>
          <i /> Dallas–Fort Worth, Texas
        </span>
        <span>Roadside assistance, day or night.</span>
      </div>
      <header className="navbar">
        <div className="container nav-inner">
          <Brand />
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="primary-navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav
            id="primary-navigation"
            aria-label="Main navigation"
            className={open ? "nav-links open" : "nav-links"}
          >
            {[
              ["/", "Home"],
              ["/services", "Our Services"],
              ["/about", "About Us"],
              ["/faq", "FAQs"],
              ["/contact", "Contact"],
            ].map(([path, label]) => (
              <NavLink key={path} to={path} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
            <Link
              className="button mobile-nav-request"
              to="/contact"
              onClick={() => setOpen(false)}
            >
              Call us <Phone size={18} />
            </Link>
          </nav>
          <Link className="button nav-cta" to="/contact">
            Call us <Phone size={18} />
          </Link>
        </div>
      </header>
      <Link className="mobile-emergency" to="/contact">
        <Phone size={18} /> Call us <span>{business.phone} · Sample</span>
      </Link>
    </>
  );
}
