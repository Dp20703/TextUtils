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
    // let text = document.getElementById("mybox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
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
          <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter text Here!"
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleUpClick}>
          Convert to Upercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleClearClick}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  );
}
