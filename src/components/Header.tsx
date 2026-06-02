import { Link } from "react-router-dom";
import { useState } from "react";
const baseUrl = import.meta.env.BASE_URL;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`header ${isMenuOpen ? "open" : ""}`}>
      <h1 className="logo">
        <img src={baseUrl + "/assets/shared/desktop/logo.svg"} alt="logo" />
        <button
          type="button"
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
            className="menu-icon"
            src={
              baseUrl +
              `/assets/shared/mobile/${isMenuOpen ? "close" : "menu"}.svg`
            }
            alt="menu"
            height={20}
            width={20}
          />
        </button>
      </h1>

      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stories">Stories</Link>{" "}
          </li>
          <li>
            <Link to="/features">Features</Link>{" "}
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>{" "}
          </li>
        </ul>
        <a className="invite-button" href="#">
          GET AN INVITE
        </a>
      </nav>
    </header>
  );
}
