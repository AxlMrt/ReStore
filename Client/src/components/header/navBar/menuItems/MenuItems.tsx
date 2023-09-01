import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "../dropdown/DropDown";

export default function MenuItems({ link }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li>
      {link.submenu ? (
        <>
          <Link
            className="menu__item"
            onClick={() => setDropdown((prev) => !prev)}
            to="#"
          >
            {link.title}
          </Link>
          <DropDown submenus={link.submenu} dropdown={dropdown} />
        </>
      ) : (
        <Link to={link.path} key={link.title} className="menu__item">
          {link.title}
        </Link>
      )}
    </li>
  );
}
