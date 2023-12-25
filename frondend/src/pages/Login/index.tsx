import React, { ChangeEvent, MouseEvent } from "react";
import Button from "../../components/Button";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../api/login";
import MainLogo from "../../components/MainLogo";
import {
  GOOGLE_LOGIN_URL,
  KAKAO_CLIENT_ID,
  KAKAO_LOGIN_URL,
  KAKAO_OAUTH_URL,
  KAKAO_REDIRECT_URI,
} from "../../constants/login";
import axios from "../../api/axios";

const LoginPage = () => {
  const navigate = useNavigate();

  const [emailInputValue, setEmailInputValue] = React.useState("");
  const [passwordInputValue, setPasswordInputValue] = React.useState("");

  const registerHandler = (e: MouseEvent<HTMLButtonElement>) => {
    navigate("/register");
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailInputValue(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(e.target.value);
  };

  const loginHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    const data = {
      username: emailInputValue,
      password: passwordInputValue,
    };
    const res = await postLogin(data);
    console.log(res);
    
    navigate("/mypage");
  };

  return (
    <div className="container">
      <MainLogo />

      <div className="input">
        <input
          type="text"
          placeholder="이메일"
          value={emailInputValue}
          onChange={onChangeEmail}
        />
        <input
          type="text"
          placeholder="비밀번호"
          value={passwordInputValue}
          onChange={onChangePassword}
        />
        <Button onClick={loginHandler}># 로그인</Button>
      </div>

      <div className="register">
        <p>아직 회원이 아니세요?</p>
        <Button className="" onClick={(e) => registerHandler(e)}>
          회원가입
        </Button>
        <Button
          onClick={() => {
            window.location.href = KAKAO_LOGIN_URL;
          }}
        >
          카카오로 시작
        </Button>
        <Button
          onClick={() => {
            window.location.href = GOOGLE_LOGIN_URL;
          }}
        >
          구글로 시작
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
