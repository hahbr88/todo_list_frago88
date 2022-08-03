import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TodoBox = styled.div`
  width: 27%;
  border: 4px solid #5b6ee1;
  border-radius: 12px;
  padding: 12px 24px 24px;
  box-shadow: 2px 2px 2px 2px #8c94c3;

`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 25px;
    margin-top: 10px;
  }
  button {
    border: none;
    padding: 7px;
    border-radius: 15px;
    margin-top: 10px;
    margin-bottom: 0;
    font-weight: bold;
    height: 100%;
  }
`;

const BottomBtnSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
  button {
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 50%;
    font-family: "Jua", sans-serif;
    font-size: 15px;
  }

  .del {
    background-color: #fff;
    border: 2px solid red;
    color: red;
  }
  .done {
    background-color: #fff;
    border: 2px solid #5468db;
    color: #5468db;
  }
  .cancel {
    background-color: #fff;
    border: 2px solid #79299b;
    color: #79299b;
  }
`;

function Todo({ todoBoxes, delTodo, checkDone }) {
  const navigate = useNavigate();
  return (
    <TodoBox>
      <Top>
        <h2>{todoBoxes.title}</h2>
        <button onClick={() => navigate(`/detail/${todoBoxes.id}`)}>상세 보기</button>
      </Top>

      <p>{todoBoxes.body}</p>
      <BottomBtnSet>
        <button
          className="del"
          onClick={() => {
            delTodo(todoBoxes.id);
          }}
        >
          삭제하기
        </button>

        {!todoBoxes.isDone ? (
          <button
            className="done"
            onClick={() => {
              checkDone(todoBoxes.id);
            }}
          >
            완료
          </button>
        ) : (
          <button
            className="cancel"
            onClick={() => {
              checkDone(todoBoxes.id);
            }}
          >
            취소
          </button>
        )}
      </BottomBtnSet>
    </TodoBox>
  );
}

export default Todo;



