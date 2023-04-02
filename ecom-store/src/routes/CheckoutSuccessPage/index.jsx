import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledButtonSecondary } from "../../styles/StyledComponents/styledButton";

function SuccessPage() {
  return (
    <div className="d-flex flex-column my-5 pt-5 ">
      <Row>
        <div className="checkoutPageContainer d-flex">
          <Card className="px-5 py-4 flex-grow-1">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h1 className="mb-4">Order successful</h1>
              <p>Thank you for your purchase!</p>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Link to="/">
                <StyledButtonSecondary>Go to Home</StyledButtonSecondary>
              </Link>
            </div>
          </Card>
        </div>
      </Row>
    </div>
  );
}

export default SuccessPage;
