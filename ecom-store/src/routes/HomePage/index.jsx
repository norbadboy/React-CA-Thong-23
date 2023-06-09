import { Row, Col, Card } from "react-bootstrap";
import { API_ECOM_PATH } from "../../api/constants.mjs";
import ProductCard from "../../components/productCard.jsx";
import useAPI from "../../api/apiHook.jsx";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar.jsx";

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
    <div className="homePageContainer px-2">
      <div className="homePageTitle--container">
        <Card className="homePageTitle--card d-flex p-4 flex-column justify-content-center align-items-center">
          <h1>Welcome to the store</h1>
          <h5 className="mt-3">Here, you can buy anything!</h5>
        </Card>
      </div>
      <SearchBar />
      <Row xs={1} md={3} className="g-4">
        {items.map((product) => (
          <Col align="center" key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomePage;
