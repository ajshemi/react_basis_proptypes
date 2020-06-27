import React from "react"; // makes jsx happen
import PropTypes from "prop-types";
// import React from "react";

function Message({ name = "Eric", age = 10, sport = "Soccer" }) {
  return (
    <div>
      <>
        <h3>
          My name is {name}, I am {age} old and I love playing {sport}{" "}
        </h3>
        {/* <p>I love {nounOfOurChoice}</p> */}
        {/* <p>This is {bool ? "true" : "false"}</p> */}
        {/* <div>{this.props.children}</div> */}
      </>
    </div>
  );
}

export default Message;
//class component used for state/lifecycle methods
//class componenet //example teachers/students models should have several folders
// class Message extends React.Component {
// static defaultProps = {
//   name: "Eric",
//   age: 10,
//   sport: "Soccer",
//   // nounOfOurChoice: "Kiwi",
// };
// render() {
// console.log("THIS", this.props); //this.props is an object//console log before return//"this" is a reference to the message instance
// let name = this.props.name; //dynamically generated
// let age = this.props.age;
// let sport = this.props.sport;
// let nounOfOurChoice = this.props.nounOfOurChoice;
// let bool = this.props.bool;
// let what = this.props.what;
//can only return one object
// return (
//   <>
//     <h3>
//       My name is {name}, I am {age} old and I love playing {sport}{" "}
//     </h3>
//     {/* <p>I love {nounOfOurChoice}</p> */}
//     <p>This is {bool ? "true" : "false"}</p>
//     {/* <div>{this.props.children}</div> */}
//   </>
// );
// }
// }

// Message.defaultProps = {
//   name: "Eric",
//   age: 10,
//   sport: "Soccer",
// };
Message.propTypes = {
  // what: PropTypes.element,
  name: PropTypes.string,
  age: PropTypes.number,
  sport: PropTypes.number,
  // nounOfOurChoice: PropTypes.string,
};
//use static defaultProps in a class components
//pass in defualt in the arguement in functional components
//proptypes validation
// export default Message;
//props is communication from a parent
