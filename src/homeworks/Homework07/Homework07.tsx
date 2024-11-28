import { ButtonProps } from "./types";
import { MainButton } from "./styles";
import "./styles.css";

function Homework07({disabled, name, type = "button", onClick }: ButtonProps) {
  return (
    <div className="homework07-container">
      <MainButton
        disabled
        onClick={onClick}
        className="main-button"
        type={type}
      >
        {name}
      </MainButton>
      <MainButton
        onClick={onClick}
        className="main-button"
        type={type}
      >
        {name}
      </MainButton>
    </div>
  );
}

export default Homework07;
