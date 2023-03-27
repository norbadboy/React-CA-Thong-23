import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Row>
        <Col>
          <h3>Follow us on social media</h3>
        </Col>
      </Row>
      <Row>
        <>
          <Col>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </Col>
        </>
      </Row>
    </footer>
  );
}

export default Footer;
