import React from "react";
import NavBarLinkCategory from "./NavBarLinkCategory";
import useFirestore from "../../utils/useFirestore";

const NavBarDropdown = ({ title }) => {

  const [ data, loading ] = useFirestore('Categories');

  return (
    <li className="nav-item dropdown">
      <div
        className="nav-link dropdown-toggle"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        { title }
      </div>
      <ul className="dropdown-menu text-center">
        {
          loading ? ('Cargando...') : (data.map((element, index)=>{ return <NavBarLinkCategory category={element.title} route={element.route} key={index}/>; }))
        }
        
      </ul>
    </li>
  );
};

export default NavBarDropdown;
