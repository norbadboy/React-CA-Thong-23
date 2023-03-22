import { Row, Col } from "react-bootstrap";
import { API_ECOM_PATH } from "../../api/constants.mjs";
import ProductCard from "../../components/productCard.jsx";
import useAPI from "../../api/apiHook.jsx";

const url = API_ECOM_PATH;

function HomePage() {
  const { data: products, loading, error } = useAPI(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <h1 align="center" className="p-3">
        Welcome to the store!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Col align="center" key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomePage;
