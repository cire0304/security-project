import { HTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    active?: boolean;
    round?: boolean;
    color?: string;
    width?: string;
    height?: string;
}

const Button = ({children, ...rest}:ButtonProps) => {
    return <S.Button {...rest}>{children}</S.Button>
};

export default Button;

