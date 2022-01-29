import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //テキストボックスの入力値のステート
  const [todoText, setTodoText] = useState("");
  //未完了のToDoのステート
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaaaa", "bbbbb"]);
  //完了のToDoのステート
  const [completeTdos, setCompleteTodos] = useState(["cccccc"]);
  //イベントを検知して引数に入れる
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  //ボタンをクリックしたときの処理
  const onClickAdd = () => {
    //空文字の場合は追加しない
    if (todoText === "") return;
    //スプレット構文を使用する
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  //何行目の削除ボタンが押されたかがわからないとどれを消していいのかわからない
  //のでMapのIndexを持ってくる
  const onclickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    //指定したIndexの配列を削除する
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
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
                <button>完了</button>
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
          {completeTdos.map((todo) => {
            return (
              //仮想DOMなので何回ループしたかを図るためにkeyを設定する
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div></div>
    </>
  );
};
