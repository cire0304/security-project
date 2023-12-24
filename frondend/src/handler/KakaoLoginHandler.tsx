import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../api/axios";

const KakaoLoginHandler = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  console.log("1");
  useEffect(() => {
    const kakaoLogin = async () => {
      console.log("hi");
      const res = await axios.get(`/ouath/login/kakao?code=${code}`);

      //   const res = await axios({
      //     method: "GET",
      //     url: `/ouath2/login/kakao/?code=${code}`,
      //     headers: {
      //       "Content-Type": "application/json;charset=utf-8",
      //       "Access-Control-Allow-Origin": "*",
      //     },
      //   })
      //   console.log(res);

      // };
      
    };
    kakaoLogin();
  });

  return (
    <div className="LoginHandeler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default KakaoLoginHandler;
