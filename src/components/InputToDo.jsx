import React, { useState } from "react";
import "../styles.css";

export const InputTodo = (props) => {
  const { todoText, onchange, onClick } = props;

  return (
    <>
      <div className="input-area ">
        {/* これだけだと常に初期値が空のtodoTextが入るだけになってしまう
         <input placeholder="TODOを入力" value={todoText}/> 
         
         そのためなにか変化があったらその値を入れる実装が必要
         onChangeはイベントの値を入れられるもの
        */}
        <input placeholder="TODOを入力" value={todoText} onChange={onchange} />
        <button onClick={onClick}>追加</button>
      </div>
    </>
  );
};
