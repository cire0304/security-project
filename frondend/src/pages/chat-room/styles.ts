import styled from "styled-components";

export const Wrapper = styled.div`
  height: 600px;
  max-width: 360px;
  width: 100%;

  border: 1px solid #eaebee;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 360px;
  height: auto;
  padding: 10px 15px 10px 15px;
  border-bottom: 1px solid #eaebee;

`;

export const Title = styled.span`
  margin-left: 6px;
  color: #ff6f0f;
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;
  padding: 10px;
`;

export const ChatWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  overflow: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #F7842C;
  }
`;

