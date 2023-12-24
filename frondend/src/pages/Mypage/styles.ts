import styled from "styled-components";

export const Wrapper = styled.div`
height: auto;
  max-width: 740px;
  width: 100%;

  border: 1px solid #eaebee;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 360px;
  height: auto;
  padding: 15px 30px 25px 30px;
  margin: 20px 0 0 0;
  background: #fff;
  border-radius: 16px;

`;

export const NavigationWrapper = styled.div`
 display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 10px;
  column-gap: 10px;
  width: 100%;

  padding: 36px 0 28px 0;
  border-top: 2px solid #f5f5f5;
`;
