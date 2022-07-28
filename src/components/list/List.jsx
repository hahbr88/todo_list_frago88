import React from "react";
// import { useState } from "react";
import "./style.css";

import Todo from "../todo/Todo";

function List({ todoBoxes, setTodoBoxes }) {

  function delTodo(id) {
    setTodoBoxes(todoBoxes.filter((element) => element.id !== id));
  }

  function checkDone(id) {
    console.log(id);
    const todo_list = todoBoxes.map((el) => {
      if (el.id === id) {
        // el.isDone = !el.isDone;
        return { ...el, isDone: !el.isDone };
        // return el;
      } else {
        return { ...el };
        // return el;
      }
    });
    setTodoBoxes(todo_list);
  }

  return (
    <div className="list_container">
      <h1>Working..🔥</h1>
      
      <div className="todo_container">
        {todoBoxes.map((e, index) => {
          if (e.isDone === false) {
            return <Todo key={index} todoBoxes={e} setTodoBoxes={setTodoBoxes} delTodo = {delTodo} checkDone={checkDone} />;
          }
            return null
          
        })}
      </div>
      <hr style={{margin: '30px 10px 10px 10px', border: 'dashed 1px #8c94c3'}}/>

      <h1>Done..!🎉</h1>

      <div className="todo_container">
        {todoBoxes.map((e, index) => {
          if (e.isDone === true) {
            return <Todo key={index} todoBoxes={e} setTodoBoxes={setTodoBoxes} delTodo = {delTodo} checkDone={checkDone} />;
          } 
            return null
          
        })}
      </div>
    </div>
  );
}

export default List;
