import styled from "styled-components";

export const NavigationButton = styled.button`
  width: 220px;
  height: 66px;
  padding: 0 20px 0 26px;
  background: #fdfdfd;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    background-color: #f5f5f5;
    box-shadow: 0 5px 10px #f1f1f1;
    transform: translateY(-2px);
  }
`;
