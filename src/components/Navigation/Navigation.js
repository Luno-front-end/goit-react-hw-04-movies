import { NavLink, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  console.log("NAVIGATION", location);
  return (
    <nav className="lol">
      <ul className="navigation g-ul">
        <li className="listNav">
          <NavLink
            exact
            to={{
              pathname: "/",
              state: { from: location },
            }}
            className="g-a sliding-button"
            activeClassName="activeLinkNav"
          >
            Главная
          </NavLink>
        </li>
        <li className="listNav">
          <NavLink
            to="/movies"
            className="g-a sliding-button"
            activeClassName="activeLinkNav"
          >
            Фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
  // {{
  //             pathname: "/",
  //             state: { from: location },
  //           }}
}

// activeClassName className
