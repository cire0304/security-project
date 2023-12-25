import React, { ReactNode } from "react";
import * as S from "./styles";

export interface CircleProps {
  children?: ReactNode;
  size?: string;
  color?: string;
}

const Circle = ({ children, size, color }: CircleProps) => {
  return (
    <S.Background size={size}>
      <S.Wraaper color={color}>{children}</S.Wraaper>
    </S.Background>
  );
};

export default Circle;
