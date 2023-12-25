import React from "react";

import * as S from "./styles";
import profileImage from "../../assets/image/profile.jpeg";
import Circle from "../../components/Circle";
import ChatPreview from "./components/chatpreview";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const ChatRoom = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>채팅목록</S.Title>
        <S.ButtonWrapper>
          <Button onClick={() => {navigate("/mypage")}}>마이페이지</Button>
        </S.ButtonWrapper>
      </S.Header>

      <S.ChatWrapper>
        <ChatPreview></ChatPreview>
        <ChatPreview></ChatPreview>
        <ChatPreview></ChatPreview>
      </S.ChatWrapper>
    </S.Wrapper>
  );
};

export default ChatRoom;
