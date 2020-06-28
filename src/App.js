import React from "react"; //write javascript as it were html
// import logo from './logo.svg';
import "./App.css";
import Message from "./components/Message";
import Subject from "./components/Subject";

//functional component like turn jsonToHtml
//Message used below is an instance of message class
//multiple objects must be wrap in an element, so only one object is returned (just like one array is a collection of multiple things)
//all compononet should be receving same information
function App() {
  return (
    <div className="App">
      <Message name={"Paul"} age={12} sport={"Soccer"}>
        <Subject subjects={["Geometry", "Trigonometry", "Literature"]} />
      </Message>
      {/* <Message name={"Paul"} age={12} sport={"Soccer"}/> */}
    </div>
  );
}

export default App;
