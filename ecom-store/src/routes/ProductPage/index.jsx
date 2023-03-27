import { API_ECOM_PATH } from "../../api/constants.mjs";
import { useParams } from "react-router-dom";
import useAPI from "../../api/apiHook.jsx";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shoppingCartContext.jsx";

const url = API_ECOM_PATH;

function ProductPage() {
  let { id } = useParams();
  const { data: product, loading, error } = useAPI(`${url}/${id}`);
  const { addItemToCart } = useContext(ShoppingCartContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <h1 align="center" className="p-3">
        Product Page
      </h1>
      <div xs={1} md={3} className="g-4">
        <div align="center">
          <img className="productImage" src={product.imageUrl} alt={product.title} />

          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <Button variant="primary" onClick={() => addItemToCart(product.id)}>
            Add to Cart
          </Button>
        </div>
        <div>
          <h3>Reviews</h3>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
