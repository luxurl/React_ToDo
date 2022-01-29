import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputToDo";
import { IncompleteToDos } from "./components/IncompleteTodo";
import { CompleteTodos } from "./components/CompleteToDo";

export const App = () => {
  //テキストボックスの入力値のステート
  const [todoText, setTodoText] = useState("");
  //未完了のToDoのステート
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  //完了のToDoのステート
  const [completeTodos, setCompleteTodos] = useState([]);
  //イベントを検知して引数に入れる
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  //追加ボタンをクリックしたときの処理
  const onClickAdd = () => {
    //空文字の場合は追加しない
    if (todoText === "") return;
    //スプレット構文を使用する
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  //削除ボタンを押したときの処理
  //何行目の削除ボタンが押されたかがわからないとどれを消していいのかわからない
  //のでMapのIndexを持ってくる
  const onclickDelete = (index) => {
    const todos = [...incompleteTodos];
    deleteInCompleteArea(todos, index);
    setIncompleteTodos(todos);
  };

  //完了ボタンを押したときの処理
  const onClickComplete = (index) => {
    const todos = [...incompleteTodos];
    deleteInCompleteArea(todos, index);
    setIncompleteTodos(todos);
    //間違えたところメモ未完了のステートからインデックスを指定して取得する
    const newTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newTodos);
  };

  //戻るボタンを押したときの処理
  const onClickMoveIncomplete = (index) => {
    const todos = [...completeTodos];
    deleteInCompleteArea(todos, index);
    setCompleteTodos(todos);
    const newTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newTodos);
  };

  //ステートから削除する処理
  const deleteInCompleteArea = (todos, index) => {
    //指定したIndexの配列を削除する
    todos.splice(index, 1);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onchange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteToDos
        todos={incompleteTodos}
        onclickDelete={onclickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteTodos
        todos={completeTodos}
        onClickMoveIncomplete={onClickMoveIncomplete}
      />
      <div></div>
    </>
  );
};
