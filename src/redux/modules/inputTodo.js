const INPUT_TODO = "INPUT_TODO";
const DEL_TODO = "DEL_TODO";
const CHANGE_TODO = "CHANGE_TODO";

export const inputTodo = (payload) => {
  return { type: INPUT_TODO, payload };
};

export const delTodo = (payload) => {
  return { type: DEL_TODO, payload };
};

export const changeTodo = (payload) => {
  return { type: CHANGE_TODO, payload };
};

const initialState = {
  todos: [
    {
      id: "ff8d369a-7354-4f0e-a8e6-d4ce16dbd8da",
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: "05e7a442-bf14-4a9c-87f1-1ac732879205",
      title: "알고리즘 문제 풀기",
      body: "프로그래머스 문제.",
      isDone: true,
    },
  ],
};

// 리듀서
const todos = (state = initialState, action) => {
  console.log(action);
  console.log(state);
  console.log(state.todos);
  console.log(state.todos.at(-1));
  console.log(state.todos.at(-1).id + 1);

  switch (action.type) {
    case INPUT_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DEL_TODO:
      return {
        ...state,
        todos: state.todos.filter((element) => element.id !== action.payload),
      };
    case CHANGE_TODO:
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === action.payload) {
            return { ...el, isDone: !el.isDone };
          } else {
            return { ...el };
          }
        }),
      };

    default:
      return state;
  }
};

export default todos;
