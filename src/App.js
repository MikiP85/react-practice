import React, { useState } from "react";
import { Validation } from "./Validation/Validation";
import { Char } from "./Char/Char";

const App = () => {
  const [inputText, setInputText] = useState("");

  const inputChangeHandler = e => {
    setInputText(e.target.value);
  };

  const charList = inputText.split("").map((char, index) => {
    return (
      <Char key={index} character={char} clicked={() => deleteHandler(index)} />
    );
  });

  const deleteHandler = index => {
    let text = inputText.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    setInputText(updatedText);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter some text"
        onChange={inputChangeHandler}
        value={inputText}
      />
      <p>{inputText}</p>
      <Validation inputLength={inputText.length} />
      {charList}
    </div>
  );
};

export default App;
