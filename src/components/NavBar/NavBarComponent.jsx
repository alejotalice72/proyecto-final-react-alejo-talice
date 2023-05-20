import React from "react";
import NavarOption from "./NavBarOption";
import NavBarSearch from "./NavBarSearch";
import NavBarLogo from "./NavBarLogo";
import NavBarTogglerButton from "./NavBarTogglerButton";
import NavBarCloseButton from "./NavBarCloseButton";

const NavBarComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top shadow pt-3 pb-3">
        <div className="container text-center">

          <NavBarLogo/>
          
          <NavBarTogglerButton />

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            
            <NavBarCloseButton />

            <div className="offcanvas-body align-items-center">
              
              <NavarOption />
              
              <NavBarSearch />

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarComponent;
