import { useNavigate } from "react-router-dom";
import { AboutYouPage } from "./style";
import Button from "components/Button/Button";

function AboutYou() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <AboutYouPage>
      About You is an online fashion and lifestyle retailer that has been a
      significant partner of the Baur Group. Since its inception, About You has
      leveraged Baur's logistics expertise to optimize its operations and
      fulfill customer orders efficiently. The collaboration between the two
      companies began around 2014, helping About You grow into one of the
      leading online fashion platforms in Europe.
      <Button name="Go Back" onClick={goBack} />
    </AboutYouPage>
  );
}

export default AboutYou;
