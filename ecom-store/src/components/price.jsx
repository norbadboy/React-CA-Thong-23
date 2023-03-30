function calculateDiscountedPrice(originalPrice, discountedPrice) {
  const discountAmount = originalPrice - discountedPrice;
  const discountPercentage = (discountAmount / originalPrice) * 100;
  return `${discountPercentage.toFixed(0)}%`;
}

function Price(props) {
  const { originalPrice, discountedPrice } = props;
  const discountPercentage = calculateDiscountedPrice(originalPrice, discountedPrice);

  return (
    <div className="price d-flex flex-column">
      <span className="d-flex justify-content-center">
        <p className="me-2">Origin:</p>
        <div style={{ textDecoration: "line-through" }} className="original-price">
          ${originalPrice}
        </div>
      </span>
      <span className="d-flex justify-content-center">
        <p className="me-2">Discounted:</p>
        <div className="discounted-price">${discountedPrice}</div>
        <div>
          <p className="discount-percentage ms-1">({discountPercentage} off) </p>
        </div>
      </span>
    </div>
  );
}

export default Price;
