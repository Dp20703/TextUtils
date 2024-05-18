import React, { useState } from "react";

export default function TextForm(props) {
  const HandleUpClick = () => {
    // console.log("You clicked the button!"+ text)
    let UpText = text.toUpperCase();
    newText(UpText);
  };
  const HandleLoClick = () => {
    // console.log("You clicked the button!"+ text)
    let UpText = text.toLowerCase();
    newText(UpText);
  };
  const HandleClearClick = () => {
    let UpText = "";
    newText(UpText);
  };

  const handleOnChange = (event) => {
    // console.log("OnChange")
    newText(event.target.value);
  };

  const [text, newText] = useState("");

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter text Here!"
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={HandleUpClick}>
          Convert to Upercase
        </button>
        <button className="btn btn-primary mx-1" onClick={HandleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={HandleClearClick}>
          Clear 
        </button>
       
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          <b>
            {text.split(" ").length} words and {text.length} Characters
          </b>
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
