import React, { useState } from "react";
import "./styles.css";

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
      <div className="input-area ">
        {/* これだけだと常に初期値が空のtodoTextが入るだけになってしまう
         <input placeholder="TODOを入力" value={todoText}/> 
         
         そのためなにか変化があったらその値を入れる実装が必要
         onChangeはイベントの値を入れられるもの
        */}
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のToDo</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              //仮想DOMなので何回ループしたかを図るためにkeyを設定する
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/**
                この実装の仕方だと延々と処理が実行されてしまう
                <button onClick={onclickDelete(index)}>削除</button> 
                そのためonClickに関数として書き込むことで防げる
                。。。。なんで？？
                */}
                <button onClick={() => onclickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のToDo</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              //仮想DOMなので何回ループしたかを図るためにkeyを設定する
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickMoveIncomplete(index)}>
                  戻す
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <div></div>
    </>
  );
};
