import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";
import { ZalandoPage } from "./style";

function Zalando() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  return (
    <ZalandoPage>
      Zalando Shop
      <Button name="Go Back" onClick={goBack} />
    </ZalandoPage>
  );
}

export default Zalando;
