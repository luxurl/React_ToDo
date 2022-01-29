import React, { useState } from "react";
import "../styles.css";

export const InputTodo = (props) => {
  //propsを分割代入
  const { todoText, onchange, onClick, disabled } = props;

  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };

  return (
    <>
      <div style={style}>
        {/* これだけだと常に初期値が空のtodoTextが入るだけになってしまう
         <input placeholder="TODOを入力" value={todoText}/> 
         
         そのためなにか変化があったらその値を入れる実装が必要
         onChangeはイベントの値を入れられるもの
        */}
        <input
          disabled={disabled}
          placeholder="TODOを入力"
          value={todoText}
          onChange={onchange}
        />
        <button disabled={disabled} onClick={onClick}>
          追加
        </button>
      </div>
    </>
  );
};
