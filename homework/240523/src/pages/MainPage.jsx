import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <SupportBox>아기사자들🦁의 React (3) 스터디를 응원합니다❤️‍🔥</SupportBox>
      <BtnContainer>
        <button onClick={() => navigate("/counter")}>COUNTER</button>
        <button onClick={() => navigate("/todo-list")}>TODO-LIST</button>
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
  background-color: lightgray;
  gap: 20px;
`;

const SupportBox = styled.div`
  padding: 20px;
  border-radius: 20px;
  background-color: white;
  font-size: 1rem;
  font-family: Pretendard;
  color: black;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: white;

  button {
    padding: 5px 10px;
    font-size: 1.2rem;
    font-family: Pretendard;
    border: none;
    background-color: #e4e4e4;
    color: black;
  }
`;
