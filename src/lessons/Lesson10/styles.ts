import styled from "@emotion/styled";

export const Lesson10Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 30px;
`;

export const FactsContainer = styled.div`
  margin: 20px 0;
  max-height: 700px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;

  p {
    margin: 10px 0;
    padding: 10px;
    background: #e6f7ff;
    border-radius: 4px;
    font-size: 14px;
    text-align: left;
  }
`;

