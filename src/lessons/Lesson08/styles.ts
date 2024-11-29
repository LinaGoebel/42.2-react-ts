import styled from "@emotion/styled";
import { css } from "@emotion/react";

const boxBasicStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 2px solid;
  border-radius: 8px;
`;

export const Lesson08Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 30px;
`;

export const GreenBox = styled.div`
  ${boxBasicStyles}
  background-color: #00ff00;
  color: #1e5926;
`;

export const BlueBox = styled.div`
  ${boxBasicStyles}
  background-color: #0000ff;
  color: #235324;
`;

export const InputExample = styled.input`
  width: 200px;
  height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #a19f9f;
  }
`;
