import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../app/store/configureStore";
import { signOut } from "../../../../app/store/slice/accountSlice";
import "./dropdown.css";

export default function DropDown({ submenus, dropdown }) {
  const dispatch = useAppDispatch();
  
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <Link
            to={submenu.path}
            onClick={submenu.title === "Logout" && (() => dispatch(signOut()))}
          >
            {submenu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
