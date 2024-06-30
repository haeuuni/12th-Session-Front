import React, { useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { useTheme } from "../assets/context/ThemeContext";
import { useRecoilState } from "recoil";
import { usernameState } from "../assets/recoil/nameRecoil";
import useStore from "../assets/zustand/numberStore";

const Header = () => {
  const selectedPart = useSelector((state) => state.part.selectedPart);
  const { isDark } = useTheme();
  const count = useStore((state) => state.count);
  const [username, setUsername] = useRecoilState(usernameState);

  return (
    <Wrapper isDark={isDark}>
      <div>
        {count}기 {selectedPart} {username}님 환영합니다.
      </div>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.div`
  width: calc(100% - 20px);
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding: 10px;
  background-color: ${(props) => (props.isDark ? "#5e5e5e" : "#adadad")};
  font-family: Pretendard;
  color: white;
`;
