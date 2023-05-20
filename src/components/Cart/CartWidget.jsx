import React, { useContext } from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from '../../context/CartContext';
import { routes } from '../../routes';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
  
  const { cart } = useContext(CartContext);
  const { cartView } = routes;

  return (
    <>
      <NavLink to={cartView} activeclassname="nav-link bg-primary" className='nav-link'> 
        <div className="d-flex jutify-content-center align-items-center m-3">
          {cart.length} {<BsFillCartFill />}
        </div>
      </NavLink>
    </>
  );
};

export default CartWidget;