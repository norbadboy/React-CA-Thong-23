import { ShoppingCartContext } from "../contexts/shoppingCartContext";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";

export default function ShoppingCartIcon() {
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="me-1">
        <FaShoppingCart />
      </div>
      {shoppingCart.length > 0 && shoppingCart.length}
    </>
  );
}
