import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  // remove the first element found in an array.
  // ignore duplicates
  function removeElementFromArray(arr, element) {
    const index = arr.indexOf(element);
    if (index !== -1) {
      return arr.slice(0, index).concat(arr.slice(index + 1));
    }
    return arr;
  }

  const addItemToCart = (item) => {
    setShoppingCart([...shoppingCart, item]);
  };

  const removeItemFromCart = (itemId) => {
    const newShoppingCart = removeElementFromArray(shoppingCart, itemId);
    setShoppingCart(newShoppingCart);
  };

  const clearAllItems = () => {
    setShoppingCart([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart, addItemToCart, removeItemFromCart, clearAllItems }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
