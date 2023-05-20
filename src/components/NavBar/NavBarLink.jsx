import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLink = ({ title, route }) => {
  return (
    <li className="nav-item">
    	<NavLink to={route} activeclassname="nav-link bg-primary" className='nav-link'> {title} </NavLink>
    </li>
  );
};

export default NavBarLink;