import { NavLink } from "react-router-dom";
import "../../styles/styles.css";

export default function Navigation() {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink
            exact
            to="/"
            className="linkNav"
            activeClassName="activeLink"
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="linkNav"
            activeClassName="activeLink"
          >
            Фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// activeClassName className
