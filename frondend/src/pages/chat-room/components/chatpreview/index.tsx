import React from "react";

import * as S from "./styles";
import profileImage from "../../../../assets/image/profile.jpeg";
import Circle from "../../../../components/Circle";

const ChatPreview = () => {
  return (
    <S.ChatInnerWrapper>
      <S.profileImage src={profileImage} alt="profile"></S.profileImage>
      <S.ContentWrapper>
        <S.Name>시레</S.Name>
        <S.Time>3분전</S.Time>
        <S.Message>asdfsd</S.Message>
      </S.ContentWrapper>
      <Circle size="25px">1</Circle>
    </S.ChatInnerWrapper>
  );
};

export default ChatPreview;
