import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <img src="" alt="" />
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
