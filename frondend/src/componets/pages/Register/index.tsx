import React, { ChangeEvent, MouseEvent, useState } from 'react'
import MainLogo from '../../components/MainLogo'
import * as S from './styles'
import Button from '../../components/Button'
import { postRegister } from '../../api/register'

const RegisterPage = () => {
  const [emailInputValue, setEmailInputValue] = useState("")
  const [passwordInputValue, setPasswordInputValue] = useState("")

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailInputValue(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(e.target.value);
  };

  const registerHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    const data = {
      username: emailInputValue,
      password: passwordInputValue,
    };
    const res = await postRegister(data);

  }

  return (
    <S.Container>

      <MainLogo />
      <S.rows>
        <S.row>
          <S.input type="text" placeholder="이메일" onChange={onChangeEmail}/>
          <Button >check</Button>
        </S.row>
        <S.row>
          <S.input type="text" placeholder="비밀번호" onChange={onChangePassword}/>
        </S.row>
      </S.rows>

      <Button onClick={registerHandler}>회원가입</Button>
      
    </S.Container>
  )
}

export default RegisterPage
