import { useNavigate } from "react-router-dom";

import { OttoPage } from "./style";
import Button from "components/Button/Button";

function Otto() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <OttoPage>
      Otto Shop
      <Button name="Go Back " onClick={goBack} />
    </OttoPage>
  );
}

export default Otto;
