import styled from "@emotion/styled";

export const SpinnerContainer = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

export const SpinnerStyled = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
