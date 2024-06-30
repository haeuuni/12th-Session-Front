import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

const CounterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);

  return (
    <Wrapper>
      <ContentContainer>
        <button onClick={() => dispatch(increment())}>+</button>
        <CountDisplay>{count}</CountDisplay>
        <button onClick={() => dispatch(decrement())}>-</button>
      </ContentContainer>
      <ButtonContainer>
        <Button onClick={() => dispatch(reset())}>Reset</Button>
        <Button onClick={() => navigate("/")}>홈으로</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default CounterPage;

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

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: white;

  button {
    padding: 5px 10px;
    font-size: 1.5rem;
    border: none;
    background-color: #e4e4e4;
    color: black;
  }
`;

const CountDisplay = styled.span`
  font-size: 1.5rem;
  color: black;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 1.2rem;
  border: none;
  background-color: #e4e4e4;
  color: black;
  border-radius: 10px;
`;
