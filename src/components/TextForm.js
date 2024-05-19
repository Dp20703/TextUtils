import React, { useState } from "react";

export default function TextForm(props) {
  const HandleUpClick = () => {
    // console.log("You clicked the button!"+ text)
    let UpText = text.toUpperCase();
    SetText(UpText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const HandleLoClick = () => {
    // console.log("You clicked the button!"+ text)
    let UpText = text.toLowerCase();
    SetText(UpText);
    props.showAlert("Converted to Lowercase", "success");

  };
  const HandleClearClick = () => {
    let UpText = "";
    SetText(UpText);
    props.showAlert("Text Cleared", "success");

  };
  const HandleCopy = () => {
    let newText = document.getElementById("mybox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to Clipboard", "success");

  };
  const HandleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    SetText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");

  };
  const handleOnChange = (event) => {
    // console.log("OnChange")
    SetText(event.target.value);
  };

  const [text, SetText] = useState("");

  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter text Here!"
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
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
        <button className="btn btn-primary mx-1" onClick={HandleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={HandleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Text Summary</h2>
        <p>
          <b>
            {(text.length > 0) ? text.split(" ").length : 0} words and {text.length} Characters
          </b>
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to Preview it here"}
        </p>
      </div>
    </>
  );
}
