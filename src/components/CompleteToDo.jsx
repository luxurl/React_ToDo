import React, { useState } from "react";
import "../styles.css";

export const CompleteTodos = (props) => {
  const { todos, onClickMoveIncomplete } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了のToDo</p>
        <ul>
          {todos.map((todo, index) => {
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
    </>
  );
};
