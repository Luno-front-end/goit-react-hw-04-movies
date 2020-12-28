import { NavLink } from "react-router-dom";
import "../../styles/styles.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="activeLink">
        Главная
      </NavLink>
      <NavLink to="/movies" activeClassName="activeLink">
        Фильмы
      </NavLink>
    </nav>
  );
}

// activeClassName className
