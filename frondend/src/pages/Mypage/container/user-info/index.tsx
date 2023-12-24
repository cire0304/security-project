import React from "react";
import * as S from "./styles";

import profileImage from "../../../../assets/image/profile.jpeg";
import {ReactComponent as UserInfoIcon} from "../../../../assets/icon/userinfo-icon.svg";

const UserInfo = () => {
  return (
    <S.Wrapper>

      <S.Header>
        <UserInfoIcon/>
        <S.Title>User Info</S.Title>
      </S.Header>

      <S.ProfileImage src={profileImage} alt="asdfasd"/>
      <S.Name>asdf</S.Name>
      <S.Email>asdf@example.com</S.Email>

      <S.EditWrapper>
        <S.EditButton>+ 내 닉네임 수정</S.EditButton>
        <S.EditButton>+ 비밀번호 수정</S.EditButton>
      </S.EditWrapper>

    </S.Wrapper>
  );
};

export default UserInfo;
