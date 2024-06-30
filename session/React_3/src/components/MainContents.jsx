import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainContents = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>1. 파트 설정 : Redux 예제</div>
      <div>2. 테마 설정 : Context API 예제</div>
      <div>3. 이름 설정 : Recoil 예제</div>
      <div>4. 기수 설정 : Zustand 예제</div>
    </Wrapper>
  );
};
export default MainContents;

const Wrapper = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  font-family: Pretendard;
`;
