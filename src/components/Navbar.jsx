import { useState } from "react";
import { Links } from "./header/Links";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="main-nav">
      <div className="navbar">
        <div className="logo">
          <a href="">Tu tienda</a>
        </div>

        <ul className="links">
          <Links />
        </ul>

        <div className="toggle_btn" onClick={() => setMenu(!menu)}>
          <i
            className={`${menu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}`}
          ></i>
        </div>
      </div>

      <div className={`dropdown_menu ${menu ? "open" : "close"}`}>
        <Links />
      </div>
    </div>
  );
};
