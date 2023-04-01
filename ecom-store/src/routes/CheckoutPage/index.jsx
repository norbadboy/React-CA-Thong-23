import { useContext } from "react";
import { Row, Card } from "react-bootstrap";
import useAPI from "../../api/apiHook";
import { API_ECOM_PATH } from "../../api/constants.mjs";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext";
import { StyledButton, StyledButtonSecondary } from "../../styles/StyledComponents/styledButton";
import { useNavigate } from "react-router-dom";

const url = API_ECOM_PATH;

function Checkout() {
  const { shoppingCart, removeItemFromCart, clearAllItems } = useContext(ShoppingCartContext);

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
    <div className="d-flex flex-column">
      <Row className="my-5 pt-5 ">
        <h1 className="d-flex justify-content-center">Checkout</h1>
      </Row>
      <Row>
        <div className="checkoutPageContainer d-flex">
          <Card className="px-5 py-4 flex-grow-1">
            {checkoutItems.map((item, index) => (
              <div
                key={item.id + index}
                className="mb-4 mt-3 d-flex flex-column align-items-center"
              >
                <h5 className="mb-2">{item.title}</h5>
                <div className="d-flex border-bottom pb-2">
                  <img className="checkoutImage" src={item.imageUrl} alt={item.title} />{" "}
                  <div className=" d-flex checkoutItemsContainer">
                    <div className="d-flex align-items-center">$ {item.discountedPrice}</div>
                    <div className="d-flex align-items-center checkoutItemsRemoveButton">
                      <StyledButtonSecondary
                        style={{ height: 45 }}
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        Remove
                      </StyledButtonSecondary>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Card>
          <Card className="d-flex flex-column justify-content-center p-5">
            <div className="d-flex flex-column align-items-center">
              <h5 className="mb-2">Total</h5>
              <div className="d-flex">
                <div className="d-flex align-items-center mb-1">
                  $ {checkoutItems.reduce((acc, item) => acc + item.discountedPrice, 0).toFixed(2)}
                </div>
              </div>
            </div>
            <StyledButton className="mt-4" onClick={onGoToCheckoutButtonClick}>
              Check out
            </StyledButton>
          </Card>
        </div>
      </Row>
    </div>
  );
}

export default Checkout;
