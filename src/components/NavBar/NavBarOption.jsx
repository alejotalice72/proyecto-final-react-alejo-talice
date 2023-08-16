import React from "react";
import NavBarDropdown from "./NavBarDropdown";
import NavBarLink from "./NavBarLink";
import useFirestore from "../../utils/useFirestore";
import CartWidget from "../Cart/CartWidget";

const NavarOption = () => {

  const [ data, loading ] = useFirestore('Navbar');
  
  return (
    <ul className="navbar-nav align-items-center justify-content-end flex-grow-1 pe-3">

      {
        loading ? ('Cargando...') : (data.filter((element)=>{ return element.option}).map((element, index) => { return <NavBarLink title={element.title} route={element.route} key={index} />; }))
      }

      <NavBarDropdown title={'Categorias'} />
      
      <CartWidget />

    </ul>
  );
};

export default NavarOption;
