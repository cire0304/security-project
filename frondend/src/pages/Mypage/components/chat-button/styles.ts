import styled from "styled-components";

export const ChatBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 44px;
  padding: 0 12px;
  border-radius: 10px;
  background: #ff6f0f;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 5px 10px #e9e9e9;
    transform: translateY(-2px);
  }

`;