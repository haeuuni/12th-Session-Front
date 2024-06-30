import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useTheme } from "../assets/context/ThemeContext";
import useStore from "../assets/zustand/numberStore";

import Header from "../components/Header";

const NumberPage = () => {
  //zustand
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const count = useStore((state) => state.count);
  const { increment, decrement, reset } = useStore((state) => ({
    increment: state.increment,
    decrement: state.decrement,
    reset: state.reset,
  }));

  return (
    <Wrapper isDark={isDark}>
      <ContentContainer isDark={isDark}>
        <Header />
        <div className="contents">
          <div>기수 : {count}</div>
          <div className="btnBox">
            <button onClick={decrement}>-1</button>
            <button onClick={increment}>+1</button>
            <button onClick={reset}>초기화</button>
          </div>
          <Button onClick={() => navigate("/")} isDark={isDark}>
            홈으로
          </Button>
        </div>
      </ContentContainer>
    </Wrapper>
  );
};
export default NumberPage;

const Wrapper = styled.div`
  background-color: ${(props) => (props.isDark ? "black" : "lightgray")};

  width: 100%;
  height: 100lvh;
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

  .contents {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    .btnBox {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
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
