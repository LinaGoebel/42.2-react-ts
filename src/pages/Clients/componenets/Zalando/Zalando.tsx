import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";
import { ZalandoPage } from "./style";

function Zalando() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <ZalandoPage>
      The Otto Group has had a longstanding relationship with About You.
      Originally founded as a digital fashion platform under Otto's umbrella,
      About You has developed into a significant e-commerce brand in Europe.
      This partnership has been pivotal in supporting About You's growth and
      establishing its position in the competitive online retail market. Otto
      Group's involvement with About You dates back to its founding in 2014 when
      it was created as a subsidiary of Otto Group. As for Zalando, in 2024, it
      acquired a major stake in About You, purchasing 73% of the company's
      shares from its major shareholders, including Otto Group. This
      acquisition, valued at €1.13 billion, is a strategic move by Zalando to
      expand its reach within the European e-commerce market. The two companies
      will continue to operate as separate brands, but there will be significant
      integration behind the scenes, particularly in areas like logistics and
      customer experience, which are expected to yield substantial synergies
      <Button name="Go Back" onClick={goBack} />
    </ZalandoPage>
  );
}

export default Zalando;
