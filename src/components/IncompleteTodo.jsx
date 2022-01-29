import React, { useState } from "react";
import "../styles.css";

export const IncompleteToDos = (props) => {
  const { todos, onclickDelete, onClickComplete } = props;
  return (
    <>
      <div className="imcomplete-area">
        <p className="title">未完了のToDo</p>
        <ul>
          {todos.map((todo, index) => {
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
    </>
  );
};
