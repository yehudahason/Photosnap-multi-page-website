import { Link } from "react-router-dom";

const baseUrl = import.meta.env.BASE_URL;

export default function Header() {
  return (
    <header>
      <h1>
        <img src={baseUrl + "/assets/shared/desktop/logo.svg"} alt="" />
      </h1>
      <img src={baseUrl + "/assets/shared/mobile/menu.svg"} alt="" />
      <nav>
        <img src={baseUrl + "/assets/shared/mobile/close.svg"} alt="" />
        <ul>
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
          <a href="">GET AN INVITE</a>
        </ul>
      </nav>
    </header>
  );
}
