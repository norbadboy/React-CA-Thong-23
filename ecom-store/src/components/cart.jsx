import { ShoppingCartContext } from "../contexts/shoppingCartContext";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";

export default function ShoppingCartIcon() {
  const { shoppingCart, addItemToCart, removeItemFromCart } = useContext(ShoppingCartContext);
  console.log("shoppingCart :>> ", shoppingCart);

  return (
    <>
      <FaShoppingCart /> {shoppingCart.length > 0 && shoppingCart.length}
    </>
  );
}
