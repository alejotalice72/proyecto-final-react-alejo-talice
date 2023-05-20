import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartCard = ({ title, price, img, stock, item }) => {
  
  const { removeToCart, addFromStock, removeFromStock } = useContext(CartContext);

  const handleDeleteToCart = () =>{
		removeToCart(item);
	};
  const handleAddStock = () => {
    addFromStock(item);
  };
  const handleRemoveStock = () => {
    removeFromStock(item);
  };

  return (
    <>
      <div className="container shadow-lg p-3 cart-card">
        <div className="row align-items-center">
          <div className="col"> <img src={img} alt="imagen-libro" className='img-thumbnail cart-img' /> </div>
          <div className="col">  <b>Libro:</b> {title} </div>
          <div className="col"> <b>Precio:</b> ${price} </div>
          <div className="col"> <b>Stock:</b> {stock} </div>
        </div>
        <div className="row mt-3 align-items-center">
          <div className="col-8">
            <button className="btn btn-outline-danger" onClick={ ()=>{handleDeleteToCart()} }>
						  Remover  
					  </button>
          </div>
          <div className="col-4">
            <div className="d-flex justify-content-around alingn-items-center">
              <button className='btn btn-outline-danger btn-sm' onClick={ ()=>{handleRemoveStock()} }>
                -
              </button>
              <div>
                1
              </div>
              <button className='btn btn-outline-primary btn-sm' onClick={ ()=>{handleAddStock()} }>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;