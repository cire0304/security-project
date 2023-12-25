import styled, { css } from "styled-components";

export const Background = styled.div<{ size?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 50%;

  ${({ size }) =>
    size
      ? css`
          height: ${size};
          width: ${size};
        `
      : css`
          width: 35px;
          height: 35px;
        `};
`;

export const Wraaper = styled.span<{ color?: string }>`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7842c;
  border-radius: 50%;

  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : css`
          color: white;
        `};
`;
