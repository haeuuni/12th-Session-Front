import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useTheme } from "../assets/context/ThemeContext";

import Header from "../components/Header";

const ThemePage = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  return (
    <Wrapper isDark={isDark}>
      <ContentContainer isDark={isDark}>
        <Header />
        <div className="contents">
          <Button onClick={toggleTheme} isDark={isDark}>
            다크 모드
          </Button>
          <Button onClick={() => navigate("/")} isDark={isDark}>
            홈으로
          </Button>
        </div>
      </ContentContainer>
    </Wrapper>
  );
};
export default ThemePage;

const Wrapper = styled.div`
  background-color: ${(props) => (props.isDark ? "black" : "lightgray")};

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 60vw;
  height: 40vh;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => (props.isDark ? "#969696" : "white")};

  overflow: hidden;

  gap: 10px;

  .contents {
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;
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
