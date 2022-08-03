import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { delTodo, changeTodo } from "../../redux/modules/inputTodo";
import Todo from "../todo/Todo";


const TodoContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 24px;
    flex-wrap: wrap;
    min-height: 200px;
`

function List() {
  const todos = useSelector((state) => state.inputTodo.todos);

  const dispatch = useDispatch();

  const onDelTodo = (id) => {
    dispatch(delTodo(id))
  }

  const onChangeTodo = (id) => {
    dispatch(changeTodo(id))
  }

  return (
    <>
      <h1>Working..🔥</h1>
      <TodoContainer>
        {todos.map((e, index) => {
          if (e.isDone === false) {
            return <Todo key={index} todoBoxes={e} delTodo={onDelTodo} checkDone={onChangeTodo} />;
          }
          return null;
        })}
      </TodoContainer>
      <hr style={{ margin: "30px 10px 10px 10px", border: "dashed 1px #8c94c3" }} />

      <h1>Done..!🎉</h1>
      <TodoContainer>
        {todos.map((e, index) => {
          if (e.isDone === true) {
            return <Todo key={index} todoBoxes={e} delTodo={onDelTodo} checkDone={onChangeTodo} />;
          }
          return null;
        })}
      </TodoContainer>
    </>
  );
}

export default List;
