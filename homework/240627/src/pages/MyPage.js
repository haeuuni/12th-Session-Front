import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

//components
import TopBar from "../components/TopBar";
import Book from "../components/Book";

//images
import book from "../images/book.png";

const MyPage = () => {
  const navigate = useNavigate();

  // -----------------------------------------------------------------
  // 문제 ) localStorage에서 userName 받아와서 변수에 저장하기
  const [userName, setUserName] = useState(() =>
    localStorage.getItem("usernName")
  );

  //
  // 문제 ) localStorage 저장 값 삭제, login 페이지로 이동하기
  const logout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");

    navigate("/login");
    // localStorage에서 userName, token 삭제
    // login 페이지로 이동
  };
  //--------------------------------------------------------------------

  // 좋아요한 책 목록을 저장할 state
  const [likedBookList, setLikedBookList] = useState([]);
  const [render, setRender] = useState(1);

  const BASE_URL = " https://likelionbook.pythonanywhere.com/";

  //--------------------------------------------------------------------
  // 문제 ) 로컬 스토리지에서 token 값을 받아와 token 변수에 할당해주세요.
  const token = localStorage.getItem("token");
  //
  // 문제 ) axios를 사용하여 좋아요한 책 목록을 받아오는 API를 호출하는 함수를 작성해주세요.
  //      이때 받아온 데이터는 setLikedBookList를 사용하여 likedBookList에 저장해주세요.
  const getLikedBooks = async () => {
    await axios
      .get(`${BASE_URL}book/scrap/`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("스크랩 목록 조회 성공:", response.data);
          setLikedBookList(response.data.data);
        } else {
          console.log("스크랩 목록 조회 실패:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("스크랩 목록 조회 중 오류 발생:", error);
      });
  };

  //--------------------------------------------------------------------

  // 컴포넌트가 마운트될 때 getLikedBooks 함수를 호출합니다.
  useEffect(() => {
    getLikedBooks();
  }, [render]);

  return (
    <>
      <Wrapper>
        <Container>
          <TopBar />
          <NameContainer>
            <img src={book} alt="book" />
            {/* userName이 잘 받아와졌다면 아래 주석을 해제해안주세요. */}
            {userName}님
          </NameContainer>
          <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
          <LikedContainer>
            <p>좋아한 책 목록</p>
            <BookList>
              {likedBookList.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  render={render}
                  setRender={setRender}
                />
              ))}
            </BookList>
          </LikedContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default MyPage;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameContainer = styled.div`
  width: 273px;
  height: 101px;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #d1def0;
  border-radius: 20px;

  font-size: 27px;
  font-weight: 600;
  color: #6b6c6d;

  img {
    width: 70px;
    margin-right: 5px;
  }
`;

const LogoutBtn = styled.div`
  margin: 10px 17.5% 0 auto;
  text-decoration: underline;
  color: #6b6c6d;
  cursor: pointer;
`;

const LikedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 7%;

  p {
    padding: 0 0 10px 20px;
    border-style: none none solid none;
    border-bottom: solid 1px #9b9b9b;
    color: #6b6c6d;
    font-weight: 600;
    font-size: 18px;
  }
`;

const BookList = styled.div`
  width: 100%;
  margin-top: 10px;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
`;
