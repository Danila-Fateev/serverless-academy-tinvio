import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <img src="" alt="" />
        <p>TINVIO</p>
        <select name="lang" id="langSelect">
          <option value="en">English</option>
          <option value="ua">Ukrainian</option>
          <option value="ru">Russian</option>
          <option value="fr">French</option>
        </select>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/company">Company</Link>
            </li>
          </ul>
        </nav>

        <button>Get Started</button>
      </header>
    </>
  );
}

export default Header;
