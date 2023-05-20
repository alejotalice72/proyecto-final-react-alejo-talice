import React from "react";

const NavBarCloseButton = () => {
  return (
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
        Book Store
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default NavBarCloseButton;
