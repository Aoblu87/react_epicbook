import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Ratio from "react-bootstrap/Ratio";
import Library from "../assets/boooks.jpeg";

function Welcome() {
  return (
    <Container className="my-5">
      <Card className="bg-light text-white border border-0">
        <Ratio aspectRatio="21x9">
          <Card.Img className="img-fluid" src={Library} alt="New Tapei" />
        </Ratio>
        <Card.ImgOverlay>
          <Card.Title className="display-3 text-dark p-4 fw-semibold">
            Welcome on EpicBooks
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}

export default Welcome;
