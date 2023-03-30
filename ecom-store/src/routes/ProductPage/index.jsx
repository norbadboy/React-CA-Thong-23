import { API_ECOM_PATH } from "../../api/constants.mjs";
import { useParams } from "react-router-dom";
import useAPI from "../../api/apiHook.jsx";
import { Button, Col, Row } from "react-bootstrap";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext.jsx";
import CommentCard from "../../components/commentCard.jsx";
import Price from "../../components/price.jsx";

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
      <h1 align="center" className="my-5 pt-5 ">
        Product
      </h1>
      <div xs={1} md={3} className="g-4">
        <Row align="center">
          <Col>
            <img className="productImage" src={product.imageUrl} alt={product.title} />
          </Col>
          <Col className="d-flex flex-column">
            <h3>{product.title}</h3>
            <p className="mt-3">{product.description}</p>
            <div className="mt-3">
              <Price originalPrice={originalPrice} discountedPrice={discountedPrice} />
            </div>
            <Button className="mt-3" variant="primary" onClick={() => addItemToCart(product.id)}>
              Add to Cart
            </Button>
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
