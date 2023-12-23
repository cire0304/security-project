import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #F4A26D;
  /* width: 100%; */

  ${({ active, theme }) =>
    active
      ? css`
          ${theme.color.accentText};
          /* ${theme.color.accentBackgroundPrimary}; */
        `
      : css`
          ${theme.color.accentTextWeak};
          /* ${theme.color.systemBackground}; */
          ${theme.color.neutralBorder};
        `}

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}

  ${({ round }) =>
    round &&
    css`
      border-radius: 100%;
    `}

    ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

    ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`;
