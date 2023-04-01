import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledButton } from "../styles/StyledComponents/styledButton";
import "../index.scss";

function ProductCard(props) {
  const { product } = props;
  var maxLength = 60;
  var trimmedString = product.description.substring(0, maxLength);
  return (
    <Card className="homePageCard">
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="homePageCard--text px-2" style={{ textAlign: "left" }}>
          {product.description.substring(
            0,
            Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
          )}
          ...{" "}
        </Card.Text>
        <Card.Text>$ {product.price}</Card.Text>
        <Link to={`/product/${product.id}`}>
          <StyledButton variant="primary">View</StyledButton>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
