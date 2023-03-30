function calculateDiscountedPrice(originalPrice, discountedPrice) {
  const discountAmount = originalPrice - discountedPrice;
  const discountPercentage = (discountAmount / originalPrice) * 100;
  return `${discountPercentage.toFixed(0)}%`;
}

function Price(props) {
  const { originalPrice, discountedPrice } = props;
  const discountPercentage = calculateDiscountedPrice(originalPrice, discountedPrice);

  if (discountedPrice === originalPrice) {
    return (
      <div className="d-flex justify-content-center">
        <strong className="me-2">Price: </strong>
        <span className="originalPrice">${originalPrice}</span>
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex">
          <strong className="me-2">Price: </strong>
          <span className="originalPrice" style={{ textDecoration: "line-through" }}>
            ${originalPrice}
          </span>
        </div>
        <div className="mt-2">
          <strong>Discounted:</strong>
          <span className="price me-2"> ${discountedPrice}</span>
          <span className="discountBadge">({discountPercentage} off)</span>
        </div>
      </div>
    );
  }
}

export default Price;
