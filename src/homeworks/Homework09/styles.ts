import styled from "@emotion/styled";

export const Homework09Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 30px;
  padding-top: 30px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-width: 400px;
  max-width: 400px;
  padding: 20px;
  border: 2px solid blueviolet;
`;

export const ResultBlock = styled.div`
  padding: 10px;
  border: 2px solid blueviolet;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    border: 1px solid #ccc;
  }
`;

export const StyledDogImage = styled.img`
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
