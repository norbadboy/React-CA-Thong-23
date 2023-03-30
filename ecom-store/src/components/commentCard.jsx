import { Card } from "react-bootstrap";
import Rating from "./rating";

export default function CommentCard({ review }) {
  return (
    <Card className="p-2 mt-3">
      <Card.Body>
        <Card.Title className="mb-4">{review.username}</Card.Title>
        <Card.Text>{review.description}</Card.Text>
        <Rating rating={review.rating} />
      </Card.Body>
    </Card>
  );
}
