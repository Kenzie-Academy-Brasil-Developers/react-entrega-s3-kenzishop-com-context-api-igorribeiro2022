import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export function CartProvider({ children }) {

    const cartLocal = JSON.parse(localStorage.getItem("cartAppleStore")) || []
    const [cart, setCart] = useState(cartLocal);

    function addToCart(item) {
        localStorage.setItem("cartAppleStore", JSON.stringify([...cart, item]))
        setCart([...cart, item]);
    };

    function removeFromCart(item) {
        const newcart = cart.filter((prod) => prod.name !== item.name);
        localStorage.setItem("cartAppleStore", JSON.stringify(newcart))
        console.log(newcart)
        setCart(newcart);
        
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}
