import React from "react";
import * as S from "./styles";
import { ChatBtn } from "../../components/chat-button/styles";
import { useNavigate } from "react-router-dom";

const TxInfo = () => {
  const navigate = useNavigate();

  
  
  return (
    <S.Wrapper>
      <ChatBtn onClick={() => {navigate("/chatroom")}}>채팅방 가기</ChatBtn>
      <ChatBtn onClick={() => {navigate("/chatroom")}}>채팅방 만들기</ChatBtn>
    </S.Wrapper>
  );
};

export default TxInfo;
