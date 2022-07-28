import React from "react";
import "./style.css";

function Todo({ todoBoxes, delTodo, checkDone }) {
  console.log(todoBoxes);

  return (
    <div className="todo_box">
      <h2 className="todo_title">{todoBoxes.title}</h2>
      <p>{todoBoxes.body}</p>
      <div className="btn_set">
        <button className="btn todo_del_btn" onClick={() => {delTodo(todoBoxes.id);}}> 삭제하기 </button>
        
        {!todoBoxes.isDone ? (
          <button
            className="btn todo_done_btn"
            onClick={() => {
              checkDone(todoBoxes.id);
            }}
          >
            완료
          </button>
        ) : (
          <button
            className="btn todo_done_btn cancel"
            onClick={() => {
              checkDone(todoBoxes.id);
            }}
          >
            취소
          </button>
        )}
      </div>
    </div>
  );
}

export default Todo;
