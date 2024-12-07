import "./styles.ts";
import { InputProps } from "./types";
import { InputContainer, Label, InputElement } from "./styles";

function Input({
  name,
  id,
  type = "text",
  placeholder,
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <InputContainer>
      {/* Пример оператора условного рендеринга */}
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-element"
      />
    </InputContainer>
  );
}

export default Input;
