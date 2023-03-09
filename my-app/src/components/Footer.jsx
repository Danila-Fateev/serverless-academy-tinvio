import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <img src="" alt="" />
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Features</Link>
        </li>
        <li>
          <Link>Company</Link>
        </li>
        <li>
          <Link>Login</Link>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">LinkedIn</a>
        </li>
        <li>
          <a href="/">Inst</a>
        </li>
        <li>
          <a href="/">Google Play</a>
        </li>
        <li>
          <a href="/">App Store</a>
        </li>
      </ul>
      <p>
        © Tinvio™ 2020. All Rights Reserved | Privacy Policy | Terms of Service
      </p>
    </footer>
  );
}

export default Footer;
