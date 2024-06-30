import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../assets/context/ThemeContext";

import Header from "../components/Header";
import MainContents from "../components/MainContents";

const MainPage = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <Wrapper isDark={isDark}>
      <ContentContainer isDark={isDark}>
        <Header />
        <MainContents />
      </ContentContainer>
      <BtnContainer isDark={isDark}>
        <button onClick={() => navigate("/redux")}>파트 설정</button>
        <button onClick={() => navigate("/contextAPI")}>테마 설정</button>
        <button onClick={() => navigate("/recoil")}>이름 설정</button>
        <button onClick={() => navigate("/zustand")}>기수 설정</button>
      </BtnContainer>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isDark ? "black" : "lightgray")};
  gap: 30px;
`;

const ContentContainer = styled.div`
  width: 60vw;
  height: 40vh;
  border-radius: 20px;
  background-color: ${(props) => (props.isDark ? "#969696" : "white")};
  overflow: hidden;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px 20px;

  border-radius: 10px;
  background-color: ${(props) => (props.isDark ? "#969696" : "white")};

  button {
    padding: 5px 10px;
    font-size: 1.2rem;
    font-family: Pretendard;
    border: none;

    background-color: ${(props) => (props.isDark ? "#686868" : "#e4e4e4")};
    color: ${(props) => (props.isDark ? "white" : "black")};
  }
`;
