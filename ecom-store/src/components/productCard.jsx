import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledButton } from "../styles/StyledComponents/styledButton";

function ProductCard(props) {
  const { product } = props;
  return (
    <Card>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>$ {product.price}</Card.Text>
        <Link to={`/product/${product.id}`}>
          <StyledButton variant="primary">View</StyledButton>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
