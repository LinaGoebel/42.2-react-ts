import styled from "@emotion/styled";

interface ButtonDisabled{
    disabled?: boolean
}
export const MainButton = styled.button<ButtonDisabled>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  padding: 20px;
  border-radius: 4px;
  color: white;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  cursor: pointer;
  background:${({disabled})=>disabled ? 'gray' : '#1f27f5'}
`;