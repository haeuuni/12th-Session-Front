//LogjinPage.js

import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//components
import TopBar from "../components/TopBar";

//images
import book from "../images/book.png";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");

  const BASE_URL = " https://likelionbook.pythonanywhere.com/";

  //-------------------------------------------------------------------------
  // 문제 ) id, pw 정보를 data에 담아 post 방식으로 요청 보낸 후,
  //      성공 시 userName, token을 key로 하여 받아온 데이터의 nickname, access_token 정보를
  //      localStorage에 저장하고 mypage로 이동
  const goLogin = async () => {
    await axios({
      method: "POST",
      url: "https://likelionbook.pythonanywhere.com/account/signin/",
      data: {
        username: id,
        password: pw,
      },
    })
      .then((response) => {
        const { nickname, access_token } = response.data;

        // localStorage에 저장
        localStorage.setItem("userName", nickname);
        localStorage.setItem("token", access_token);

        // mypage로 이동
        navigate("/mypage");

        console.log("Login successful:", response.data.data);
      })

      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };

  // ------------------------------------------------------------------------

  return (
    <>
      <Wrapper>
        <TopBar />
        <Container>
          <img src={book} alt="book" />
          <InputWrapper>
            <input
              placeholder="아이디"
              onChange={(e) => setID(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => setPW(e.target.value)}
            ></input>
            <button onClick={goLogin}>로그인</button>
            <button
              onClick={() => navigate("/signup")}
              style={{ color: "#809bc3", background: "white" }}
            >
              회원가입
            </button>
          </InputWrapper>
        </Container>
      </Wrapper>
    </>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 10%;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-top: 30px;

  input,
  button {
    height: 40px;
    border-style: none;
    outline: none;
    border-radius: 4px;
  }

  input {
    margin-bottom: 15px;
    padding-left: 7%;

    background: #ffffff;
    box-shadow: 0px 2px 6px 0px #a5a5a533;
  }

  button {
    margin-bottom: 10px;
    background: #809bc3;
    color: white;
    border: 1px solid #809bc3;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
  }
`;

/*
{
"message": "로그인 성공",
"data": {
"id" : 2,
"nickname": "hi",
"access_token" : "eyJhbG~~~~"
}
}
*/
