import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <Link to="#">Porady</Link>
        </li>
        <li>
          <Link to="#">Powiadomienia</Link>
        </li>
        <li>
          <Link to="#">Wiadomości</Link>
        </li>
        <li>
          <Link to="#">Zarejestruj się</Link>
        </li>
        <li>
          <Link to="#">Zaloguj się</Link>
        </li>
      </ul>
    </nav>
  );
};
