import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, style }) => {
  return (
    <div style={style}>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <span key={ratingValue}>
            {ratingValue <= rating ? <AiFillStar /> : <AiOutlineStar />}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
