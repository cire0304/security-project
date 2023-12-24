import React, { useState, useEffect } from "react";

import * as S from "./styles";
import UserInfo from "./container/user-info";
import TxInfo from "./container/transaction-info";
import NavigationButton from "./components/navigation-box";

const MyPage = () => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <UserInfo/>
        <TxInfo/>
      </S.ContentWrapper>

      <S.NavigationWrapper>
        <NavigationButton>판매 내역</NavigationButton>
        <NavigationButton>구매 내역</NavigationButton>
        <NavigationButton>찜한 상품</NavigationButton>
        <NavigationButton>거래후기</NavigationButton>
        <NavigationButton>동네생활</NavigationButton>
        <NavigationButton>찜한 동네생활</NavigationButton>
      </S.NavigationWrapper>
    </S.Wrapper>
  );
};

export default MyPage;
