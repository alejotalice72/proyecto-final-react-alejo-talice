import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLinkCategory = ({ category, route }) => {
  return (
    <li>
      <NavLink to={route} activeclassname="dropdown-item bg-primary" className='dropdown-item'> {category} </NavLink>
    </li>
  );
};

export default NavBarLinkCategory;
