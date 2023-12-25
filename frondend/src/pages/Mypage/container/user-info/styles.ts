import styled from "styled-components";

export const Wrapper = styled.div`
  width: 330px;
  height: auto;
  margin-right: 20px;
  border-left: 2px solid #eaebee;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-self: start;
  gap: 5px;
`;

export const Title = styled.p`
  color: #acacac;
  margin-bottom: 40px;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 100px;
  border-radius: 100px;
  margin: 15px;
`;

export const Name = styled.p`
  color: #303032;
  font-size: 20px;
  font-weight: 600;

`;

export const Email = styled.p`
  color: #c4c4c4;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const EditWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const EditButton = styled.button`
  padding: 10px 20px ;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: #F1F1F2;
`;
