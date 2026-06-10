import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const baseUrl = import.meta.env.BASE_URL;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className={`header ${isMenuOpen ? "open" : ""}`}>
      <h1 className="logo">
        <a href={baseUrl}>
          <img src={baseUrl + "/assets/shared/desktop/logo.svg"} alt="logo" />
        </a>
        <div className="sr-only">Home</div>
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

      <nav className="nav" aria-label="Menu">
        <ul className="nav-list">
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
        <a
          className={`invite-button menu${isMenuOpen ? "open" : ""} `}
          href="#"
        >
          GET AN INVITE
        </a>
      </nav>
      <a className="invite-button head" href="#">
        GET AN INVITE
      </a>
    </header>
  );
}
