import { useNavigate } from "react-router-dom";

import { OttoPage } from "./style";
import Button from "components/Button/Button";

function Otto() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <OttoPage>
      Otto is one of the largest e-commerce companies in Germany, part of the
      Otto Group. The Baur Group has been working with Otto since 2014 to manage
      logistics, order fulfillment, and customer service. Their collaboration
      focuses on streamlining the supply chain and ensuring quick and reliable
      deliveries to customers. Otto's vast assortment, ranging from fashion to
      electronics, benefits greatly from Baur's logistics capabilities.
      <Button name="Go Back " onClick={goBack} />
    </OttoPage>
  );
}

export default Otto;
