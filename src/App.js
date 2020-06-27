import React from "react"; //write javascript as it were html
// import logo from './logo.svg';
import "./App.css";
import Message from "./components/Message";
import Student from "./components/Student";

//functional component like turn jsonToHtml
//Message used below is an instance of message class
//multiple objects must be wrap in an element, so only one object is returned (just like one array is a collection of multiple things)
//all compononet should be receving same information
function App() {
  return (
    <div className="App">
      <Message name={"Paul"} age={12} sport={"Soccer"}>
        <Student name="Mark" age={24} />
        <Student name="Peter" age={25} />
      </Message>
      <Message />
    </div>
  );
}

export default App;
