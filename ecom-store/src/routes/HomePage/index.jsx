import { Row, Col } from "react-bootstrap";
import { API_ECOM_PATH } from "../../api/constants.mjs";
import ProductCard from "../../components/productCard.jsx";
import useAPI from "../../api/apiHook.jsx";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const url = API_ECOM_PATH;

function HomePage() {
  const { data, loading, error } = useAPI(url);
  let [searchParams] = useSearchParams();
  const [items, setItems] = useState([]);

  const searchText = searchParams.get("search");

  useEffect(() => {
    if (searchText && data.length > 0) {
      const filteredProducts = [...data].filter((product) => {
        return product.title.toLowerCase().includes(searchText.toLowerCase());
      });
      setItems(filteredProducts);
    } else {
      setItems(data);
    }
  }, [searchText, data]);

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
        {items.map((product) => (
          <Col align="center" key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomePage;
