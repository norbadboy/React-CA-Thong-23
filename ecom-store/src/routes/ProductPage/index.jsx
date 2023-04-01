import { API_ECOM_PATH } from "../../api/constants.mjs";
import { useParams } from "react-router-dom";
import useAPI from "../../api/apiHook.jsx";
import { Col, Row, Card } from "react-bootstrap";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext.jsx";
import CommentCard from "../../components/commentCard.jsx";
import Price from "../../components/price.jsx";
import { StyledButton } from "../../styles/StyledComponents/styledButton.jsx";

const url = API_ECOM_PATH;

function ProductPage() {
  let { id } = useParams();
  const { data: product, loading, error } = useAPI(`${url}/${id}`);
  const { addItemToCart } = useContext(ShoppingCartContext);
  const reviews = product.reviews;
  const originalPrice = product.price;
  const discountedPrice = product.discountedPrice;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <div xs={1} md={3} className="g-4 mt-5 pt-5">
        <Row align="center" className="productPageContainer">
          <Col>
            <img className="productImage" src={product.imageUrl} alt={product.title} />
          </Col>
          <Col className="d-flex flex-column">
            <h1 className="productTitle d-flex px-3">{product.title}</h1>
            <Card className="mt-2 border-0" style={{ height: 315 }}>
              <Card.Body className="productTextContainer">
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="mt-4">
                  <Price originalPrice={originalPrice} discountedPrice={discountedPrice} />
                </Card.Text>
                <StyledButton className="mt-3" onClick={() => addItemToCart(product.id)}>
                  Add to Cart
                </StyledButton>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <h3>Reviews</h3>
          <div>
            {reviews?.map((review) => (
              <CommentCard review={review} key={review.id} />
            ))}
          </div>
        </Row>
      </div>
    </>
  );
}

export default ProductPage;
