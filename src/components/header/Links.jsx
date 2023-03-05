import { NavLink } from "react-router-dom";


export const Links = () => {

  return (
    <>
      <NavLink
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        to="About"
      >
        About
      </NavLink>

      <NavLink
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        to="/"
      >
        Products
      </NavLink>

      <NavLink
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        to="/"
      >
        Contact
      </NavLink>
    </>
  );
};
