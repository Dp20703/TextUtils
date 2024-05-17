// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import TextForm2 from "./components/TextForm2";
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="about" />
      {/* <Navbar title={3} about="about Text" /> */}
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm heading='Enter the text to analyze blow'/>
      </div>
    
        
      
    </>
  );
}

export default App;
