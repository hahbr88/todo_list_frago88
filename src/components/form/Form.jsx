import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import { inputTodo } from "../../redux/modules/todo";
import { useDispatch, useSelector } from "react-redux"; // import 해주세요.

const InputForm = styled.form`
  align-items: center;
  display: flex;
  gap: 20px;

  background-color: #5b6ee1;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;

  font-family: "Jua", sans-serif;
  font-weight: lighter;

  input:focus-visible {
    outline-offset: 0px;
  }

  button {
    background-color: rgb(228, 228, 228);
    border: none;
    border-radius: 10px;
    color: black;
    font-weight: 700;
    height: 40px;
    width: 140px;

    font-family: "Jua", sans-serif;
    cursor: pointer;
  }
`;
const InputGroup = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;

  label {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }

  input {
    border: none;
    border-radius: 12px;
    height: 40px;
    padding: 0 12px;
    width: 240px;
  }
`;

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const todos = useSelector((state) => state.inputTodo.todos);
  // console.log(todos.at(-1).id + 1);  // 이렇게 하면 고유 값이 나올줄 알았는데 아니었다.
  const dispatch = useDispatch(); // dispatch 생성

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" || body === "") return; // 둘중 하나라도 입력하지 않았을 때 dispatch 하지 않음
    dispatch(
      inputTodo({
        // id: todos.at(-1).id + 1,
        id: uuidv4(),
        title: title,
        body: body,
        isDone: false,
      })
    );
    setTitle("");
    setBody("");
  };

  return (
    <InputForm onSubmit={onSubmitHandler}>
      <InputGroup>
        <label>제목</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="title"/>
        <label>내용</label>
        <input type="text" value={body} onChange={(e) => setBody(e.target.value)} name="body"/>
      </InputGroup>
      <button>추가하기</button>
    </InputForm>
  );
}

export default Form;
