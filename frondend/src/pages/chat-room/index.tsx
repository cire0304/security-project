import React from "react";

import * as S from "./styles";
import profileImage from "../../assets/image/profile.jpeg";
import Circle from "../../components/Circle";
import ChatPreview from "./components/chatpreview";

const ChatRoom = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>채팅목록</S.Title>
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
