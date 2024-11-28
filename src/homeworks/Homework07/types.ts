type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  disabled?: boolean;
  name?: string;
  type?: ButtonType;
  onClick?: () => void;
}