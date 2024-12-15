import { useNavigate } from "react-router-dom";
import { AboutYouPage } from "./style";
import Button from "components/Button/Button";

function AboutYou() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <AboutYouPage>
      About You Shop
      <Button name="Go Back" onClick={goBack} />
    </AboutYouPage>
  );
}

export default AboutYou;
