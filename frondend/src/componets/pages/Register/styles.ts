import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 400px;

  border: 1px solid #000;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const rows = styled.div`
  width: 100%;
margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  gap: 10px;
`;
export const row = styled.div`
  width: 250px;
  display: flex;
  gap: 10px;
`;

export const input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #EBE9E9;
`;
