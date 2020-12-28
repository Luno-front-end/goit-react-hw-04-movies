import { NavLink } from "react-router-dom";
import "../../styles/styles.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="activeLink">
        Головна
      </NavLink>
      <NavLink to="/movies" activeClassName="activeLink">
        Фільми
      </NavLink>
    </nav>
  );
}

// activeClassName className
