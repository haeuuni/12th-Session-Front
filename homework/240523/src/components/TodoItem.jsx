import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <ItemContainer onClick={() => dispatch(toggleTodo(todo.id))}>
      <span className={todo.completed ? "completed" : ""}>
        {todo.completed ? "✅" : "🧡"} {todo.text}
      </span>
      <DeleteButton
        onClick={(e) => {
          e.stopPropagation();
          dispatch(deleteTodo(todo.id));
        }}
      >
        ❎
      </DeleteButton>
    </ItemContainer>
  );
};

export default TodoItem;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;

  span {
    font-family: Pretendard;
    overflow-wrap: break-word;
    word-break: break-all;
  }

  &:hover {
    background-color: #f4f4f4;
  }

  .completed {
    text-decoration: line-through;
    color: #a4a4a4;
  }
`;

const DeleteButton = styled.div`
  visibility: hidden;
  cursor: pointer;

  ${ItemContainer}:hover & {
    visibility: visible;
  }
`;
