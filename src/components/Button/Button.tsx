import "./styles.ts";
import { ButtonProps } from "./types";
import { MainButton } from './styles.js'

function Button({disabled, name, type = "button", onClick }: ButtonProps) {
  // console.log(props.buttonName);

  return (
    <MainButton disabled onClick={onClick} className="main-button" type={type}>
      {name}
    </MainButton>
  );
}

export default Button;
