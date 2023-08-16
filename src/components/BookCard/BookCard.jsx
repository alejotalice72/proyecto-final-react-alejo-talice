import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { BsCartPlus } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const BookCard = ({ title, img, price, item }) => {
	
	const { addToCart, checkCart, removeToCart } = useContext(CartContext);
	const width = {width:"18rem"};
	const navigator = useNavigate();

	const handleAddToCart = () => {
		addToCart(item);
	};
	const handleDeleteToCart = () =>{
		removeToCart(item);
	};
	const handleDetail = () => {
		navigator('/books/detail/' + title);
	}

	return (
	  <>
		<div className="card mb-4 block__select" style={width}>
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