import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLogo = () => {
  return (
    <NavLink to={'/'} className={"navbar-brand"}> Book Store </NavLink>
  );
};

export default NavBarLogo;
