import React ,{useState} from "react";


export default function TextForm(props) {
const HandleUpClick=()=>{
      // console.log("You clicked the button!"+ text)
     let UpText=text.toUpperCase();
    newText(UpText)
}
const handleOnChange=(event)=>{
      // console.log("OnChange")
    newText(event.target.value);
}

    const [text, newText] = useState("Enter text here");

    return (
        <div>
        <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={HandleUpClick}  >Convert to Upercase</button>
    </div>
  );
}
