import { Row, Col } from "react-bootstrap";

function Checkout() {
  return (
    <>
      <h1>Chekout Page!</h1>
      <Row xs={1} md={3} className="g-4">
        <Col align="center">
          <h2>Product 1</h2>
        </Col>
        <Col align="center">
          <h2>Product 2</h2>
        </Col>
      </Row>
    </>
  );
}

export default Checkout;
