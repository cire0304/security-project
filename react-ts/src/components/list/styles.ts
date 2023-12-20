import styled from "styled-components";

export const Button = styled.button`
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
`;

export const Div = styled.div<{completed : boolean}>`
    padding: 10px;
    border-bottom: 1px #ccc dotted;
    text-decoration: ${(props) => props.completed ? 'line-through' : 'none'};
`
