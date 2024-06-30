import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { setSelectedPart } from "../assets/redux/redux";
import { useSelector } from "react-redux";
import { useTheme } from "../assets/context/ThemeContext";

import Header from "../components/Header";

const PartPage = () => {
  const navigate = useNavigate();

  const selectedPart = useSelector((state) => state.part.selectedPart);
  const dispatch = useDispatch();

  const { isDark } = useTheme();

  const handleChange = (event) => {
    dispatch(setSelectedPart(event.target.value));
  };

  return (
    <Wrapper isDark={isDark}>
      <ContentContainer isDark={isDark}>
        <Header />
        <div className="contents">
          <div className="input-box">
            <input
              type="checkbox"
              value="프론트엔드"
              checked={selectedPart === "프론트엔드"}
              onChange={handleChange}
            />
            <label htmlFor="frontend">프론트엔드</label>

            <input
              type="checkbox"
              value="백엔드"
              checked={selectedPart === "백엔드"}
              onChange={handleChange}
            />
            <label htmlFor="backend">백엔드</label>

            <input
              type="checkbox"
              value="기획&디자인"
              checked={selectedPart === "기획&디자인"}
              onChange={handleChange}
            />
            <label htmlFor="design">기획&디자인</label>
          </div>
          <Button onClick={() => navigate("/")} isDark={isDark}>
            홈으로
          </Button>
        </div>
      </ContentContainer>
    </Wrapper>
  );
};

export default PartPage;

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

  .input-box {
    label {
      margin-right: 10px;
      font-family: Pretendard;
    }
  }

  .contents {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 30px;
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
