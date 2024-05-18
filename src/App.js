// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="about" />
      {/* <Navbar title={3} about="about Text" /> */}
      {/* <Navbar /> */}
      <div className="container my-3">
        {/* <TextForm heading='Enter the text to analyze blow'/> */}
<About/>
      </div>
    
        
      
    </>
  );
}

export default App;
