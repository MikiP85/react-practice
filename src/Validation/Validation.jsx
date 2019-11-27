import React from "react";

export const Validation = props => {
  let validationMessage = "Text is too short!";

  if (props.inputLength > 5) {
    validationMessage = "Text is long enough";
  }

  return (
    <div>
      {/*props.inputLength <= 5 ? <p>Text is short.</p> : <p>Text long enough.</p>*/}
      <p>{validationMessage}</p>
    </div>
  );
};
