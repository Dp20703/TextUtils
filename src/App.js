// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {


  //For Dark and Light Mode in Navbar.js File
  const [mode, setMode] = useState("light");

  //For Alert in Alert.js File
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setInterval(() => {
      setAlert(null);
    }, 1500);
  }

  // For Dark and Light Mode in Navbar.js File
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enabled", 'success');
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils - Is Amazing Mode';
      // }, 2000)
      // setInterval(() => {
      //   document.title = 'TextUtils Install now';
      // }, 1500)

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", 'success')
      // document.title = 'TextUtils - Light Mode';

    }
  };

  /* ......................Created Different Different Types Of Toggle Buttons...................*/


  /* const [mode, setMode] = useState("light");
// const removeClassList=()=>{

       //   document.body.classList.remove('bg-primary');
       //   document.body.classList.remove('bg-danger');
       //   document.body.classList.remove('bg-warning');
       //   document.body.classList.remove('bg-success');
       //   document.body.classList.remove('bg-dark');
       //   document.body.classList.remove('bg-light');
 // }
                   //For Dark Mode in Navbar.js File
   //   const toggleMode = (cls) => {
   //     removeClassList();
   //     // console.log(cls)
   // document.body.classList.add('bg-'+cls)
   // cls==='dark'?setMode('light'):setMode('dark')
   //   };
   */


  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleStyle={toggleMode} />
        {/* <Navbar title={3} about="about Text" /> */}
        {/* <Navbar /> */}
        <Alert Alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* <Route extract path="/about"> */}
            <Route path='/about' element={<About mode={mode} />} >
              {/* <About/> */}
            </Route>
            <Route extract path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />}>
            </Route>
          </Routes>
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze blow" mode={mode} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
