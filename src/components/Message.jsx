import React from "react"; // makes jsx happen
import PropTypes from "prop-types";
// import React from "react";

// function Message({ name = "Eric", age = 10, sport = "Soccer", children }) {
//   return (
//     <div>
//       <h3>
//         My name is {name}, I am {age} old and I love playing {sport}{" "}
//       </h3>
//       <div>{children}</div>
//     </div>
//   );
// }

class Message extends React.Component {
  // static defaultProps = {
  //   name: "Eric",
  //   age: 10,
  //   sport: "Soccer",
  //   // nounOfOurChoice: "Kiwi",
  // };
  render() {
    console.log("what is this", this);
    let name = this.props.name;
    let age = this.props.age;
    let sport = this.props.sport;
    let children = this.props.children;

    return (
      <div>
        <h3>
          My name is {name}, I am {age} old and I love playing {sport}{" "}
        </h3>
        <div>{children}</div>
      </div>
    );
  }
}

// Message.defaultProps = {
//   name: "Eric",
//   age: 10,
//   sport: "Soccer",
// };

export default Message;
Message.propTypes = {
  // what: PropTypes.element,
  name: PropTypes.string,
  age: PropTypes.number,
  sport: PropTypes.string,
  // children: PropTypes.element.isRequired,
  // nounOfOurChoice: PropTypes.string,
};
//use static defaultProps in a class components
//pass in defualt in the arguement in functional components
//proptypes validation
// export default Message;
//props is communication from a parent
