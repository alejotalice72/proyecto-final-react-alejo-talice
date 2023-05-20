import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { BsCartPlus } from "react-icons/bs";

const BookCard = ({ title, img, price, item }) => {
	
	const { addToCart, checkCart, removeToCart } = useContext(CartContext);
	const width = {width:"18rem"};

	const handleAddToCart = () => {
		addToCart(item);
	};
	const handleDeleteToCart = () =>{
		removeToCart(item);
	};
	const handleDetail = () => {
		console.log('hola')
	}

	return (
	  <>
		<div className="card mb-4" style={width}>
		  <img src={img} className="card-img-top img-fluid" alt="imagen-libro" />
		  <div className="card-body">
			<h5 className="card-title"> {title}  </h5>
			<p>precio: ${price}</p>
			<div className="d-flex justify-content-around align-items-center mt-2">
				{
					checkCart(item) ? (
					<button className="btn btn-outline-danger" onClick={ ()=>{handleDeleteToCart()} }>
						Remover  
					</button>) :
					(
					<button className="btn btn-outline-success" onClick={ ()=>{handleAddToCart()} }>
						Agregar al carrito <BsCartPlus></BsCartPlus>
					</button>
					)
				}
				<button className="btn btn-outline-primary" onClick={ ()=>{handleDetail()} }>
					+ Info
				</button>
			</div>
		  </div>
		</div>
	  </>
	);
};

export default BookCard;