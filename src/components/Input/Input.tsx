import "./styles.ts";
import { InputProps } from "./types";
import { InputContainer, Label, InputElement, ErrorMessage } from "./styles";

function Input({
  name,
  id,
  type = "text",
  placeholder,
  label,
  value,
  onChange,
  error,
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
      <ErrorMessage>{error}</ErrorMessage>
    </InputContainer>
  );
}

export default Input;
