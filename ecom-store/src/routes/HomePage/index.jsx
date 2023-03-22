import { Row, Col } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <h1>Welcome to the store!</h1>
      <Row xs={1} md={3} className="g-4">
        <Col align="center">
          <h2>Products</h2>
        </Col>
        <Col align="center">
          <h2>Products</h2>
        </Col>
      </Row>
    </>
  );
}

export default HomePage;
