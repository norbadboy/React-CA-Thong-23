import { ShoppingCartContext } from "../contexts/shoppingCartContext";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";

export default function ShoppingCartIcon() {
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <>
      <FaShoppingCart /> {shoppingCart.length > 0 && shoppingCart.length}
    </>
  );
}
