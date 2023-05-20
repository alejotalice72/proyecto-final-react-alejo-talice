import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartCard from '../components/Cart/CartCard';

const CartView = () => {
  
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (  
    <>
      <div className="container text-center margin-nav">
        {
          cart.map((element, index) => { return <CartCard title={element.name} img={element.img} price={element.price} stock={element.stock} item={element} key={index} />; })
        }
      </div>
    </>
  );
};

export default CartView;