//Book.js

import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

// Data
import { bookCover } from "../_mock/bookData";

// images
import likeIcon from "../images/likeIcon.svg";
import flikeIcon from "../images/fLikeIcon.svg";

const Book = ({ book, render, setRender }) => {
  const navigate = useNavigate();

  const BASE_URL = "https://likelionbook.pythonanywhere.com/";

  //--------------------------------------------------------------------
  // 문제 ) 로컬 스토리지에서 token 값을 받아와 token 변수에 할당해주세요.
  //

  // 문제 ) 토큰이 존재하면 axios를 사용하여 좋아요 여부 변경 API를 호출하고,
  //       그게 아니면 navigate를 사용하여 로그인 페이지로 이동하게 해주세요.

  const handleLikeBook = () => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .patch(
          `${BASE_URL}book/scrap/${book.id}/`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log("책 스크랩 여부 변경 성공:", response.data);
          setRender(render + 1);
        })
        .catch((error) => {
          console.error("책 스크랩 여부 변경 중 오류 발생:", error);
        });
    } else {
      navigate("/login");
    }
  };

  //--------------------------------------------------------------------

  return (
    <Wrapper>
      <BookCover src={bookCover[book.id - 1]} />
      <TitleWrapper>
        {book.name}
        {book.is_liked ? (
          <img src={flikeIcon} alt="flikeIcon" onClick={handleLikeBook} />
        ) : (
          <img src={likeIcon} alt="likeIcon" onClick={handleLikeBook} />
        )}
      </TitleWrapper>
    </Wrapper>
  );
};

export default Book;

const Wrapper = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
  color: #6b6c6d;
  font-weight: 600;
  margin: 0 15px;
`;

const BookCover = styled.img`
  width: 100%;
  height: 240px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;

  img {
    width: 30px;
    height: 30px;
  }
`;
