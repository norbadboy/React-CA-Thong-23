import { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import useAPI from "../../api/apiHook";
import { API_ECOM_PATH } from "../../api/constants.mjs";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
import { StyledButton } from "../../styles/StyledComponents/styledButton";
import { useNavigate } from "react-router-dom";

const url = API_ECOM_PATH;

function Checkout() {
  const { shoppingCart, addItemToCart, removeItemFromCart, clearAllItems } =
    useContext(ShoppingCartContext);

  const { data, loading, error } = useAPI(url);

  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  let checkoutItems = [];

  if (data.length > 0) {
    checkoutItems = shoppingCart.map((id) => data.find((item) => item.id === id));
  }

  const onGoToCheckoutButtonClick = () => {
    clearAllItems();
    navigate("/checkoutSuccess");
  };

  return (
    <>
      <h1>Checkout Page!</h1>
      {checkoutItems.map((item, index) => (
        <div key={item.id + index}>
          <div>{item.title}</div>
          <div>{item.imageUrl}</div>
          <div>{item.price}</div>
          <StyledButton onClick={() => removeItemFromCart(item.id)}>Remove</StyledButton>
        </div>
      ))}
      <Button className="mt-3" onClick={onGoToCheckoutButtonClick}>
        Check out
      </Button>
    </>
  );
}

export default Checkout;
