import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] });

const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        if(checkCart(item)) {
            alert('El producto ya se encuentra en el carrito');
        } else {
            setCart([ ...cart, item ]);
        };
    };
    const removeToCart = (item) => {
        const deleteItem = cart.filter(element => element.id !== item.id);
        setCart(deleteItem);
    };
    const checkCart = (item) => {
        return cart.some(element => element.id === item.id);
    };
    const addFromStock = (item) => {
        
    };
    const removeFromStock = (item) => {

    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeToCart, checkCart, addFromStock, removeFromStock }}> { children } </CartContext.Provider>
    );

};

export default CartProvider;