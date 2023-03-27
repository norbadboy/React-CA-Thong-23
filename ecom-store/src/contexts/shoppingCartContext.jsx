import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addItemToCart = (item) => {
    setShoppingCart([...shoppingCart, item]);
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = shoppingCart.filter((item) => item.id !== itemId);
    setShoppingCart(updatedCart);
  };

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, addItemToCart, removeItemFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
