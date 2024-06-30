import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useTheme } from "../assets/context/ThemeContext";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  usernameState,
  usernameLengthState,
} from "../assets/recoil/nameRecoil";

import Header from "../components/Header";

const NamePage = () => {
  //recoil
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const [username, setUsername] = useRecoilState(usernameState);
  const usernameLength = useRecoilValue(usernameLengthState);

  return (
    <Wrapper isDark={isDark}>
      <ContentContainer isDark={isDark}>
        <Header />
        <div className="contents">
          <div>
            Name: {username} (Length: {usernameLength})
          </div>
          <input
            placeholder="이름을 입력하세요."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button onClick={() => navigate("/")} isDark={isDark}>
            홈으로
          </Button>
        </div>
      </ContentContainer>
    </Wrapper>
  );
};
export default NamePage;

const Wrapper = styled.div`
  background-color: ${(props) => (props.isDark ? "black" : "lightgray")};

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ContentContainer = styled.div`
  width: 60vw;
  height: 40vh;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => (props.isDark ? "#969696" : "white")};

  overflow: hidden;

  gap: 10px;

  input {
    outline: none;
  }

  .contents {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 20px;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  font-family: Pretendard;
  font-size: 24px;
  border-radius: 16px;
  border: none;
  background-color: ${(props) => (props.isDark ? "#686868" : "#e4e4e4")};
  color: ${(props) => (props.isDark ? "white" : "black")};

  cursor: pointer;
`;
