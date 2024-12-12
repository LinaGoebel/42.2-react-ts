import { ChangeEvent } from "react";

export interface InputProps {
  name: string;
  id?: string;
  type?: "text" | "email" | "password" | "tel";
  placeholder?: string;
  label?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
