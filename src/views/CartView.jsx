import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartCard from '../components/Cart/CartCard';

const CartView = () => {
  
  const { cart } = useContext(CartContext);
  
  return (  
    <>
      <div className="container text-center margin-nav">
        {
          cart.length === 0 ? 
          (<h2 className='position-absolute top-50 start-50 translate-middle'>Su carrito se encuentra vacio.</h2>) 
          : 
          (cart.map((element, index) => { return <CartCard title={element.name} img={element.img} price={element.price} stock={element.stock} item={element} key={index} />; })) 
          
        }
      </div>
    </>
  );
};

export default CartView;