import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Brand } from "./Navbar";
const currentYear = new Date().getFullYear();
export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Brand />
          <p>
            A little peace of mind.
            <br />
            Every mile of the way.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/services">Our services</Link>
          <Link to="/about">About us</Link>
          <Link to="/faq">Frequently asked questions</Link>
        </div>
        <div>
          <h4>Need a hand?</h4>
          <Link to="/contact">
            Call us <Phone size={18} />
          </Link>
          <Link to="/contact">Contact us</Link>
          <span>24/7 roadside assistance concept</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {currentYear} BizTowing. Frontend demonstration.</span>
        <span>Sample contact details · No live dispatch</span>
        <a href="https://www.pexels.com" target="_blank" rel="noreferrer">
          Photography by Pexels
        </a>
      </div>
    </footer>
  );
}
