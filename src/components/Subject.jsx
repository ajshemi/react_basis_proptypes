import React from "react";
import { PropTypes } from "prop-types";
class Subject extends React.Component {
  render() {
    let subjectCollection = this.props.subjects.map((subject) => (
      <p style={{ color: "red" }}>{subject}</p>
    ));
    return (
      <div style={{ border: "2px solid blue" }}>
        <h3 style={{ color: "blue" }}>My Favorite Subjects:</h3>
        {subjectCollection}
      </div>
    );
  }
}
Subject.propTypes = {
  subjects: PropTypes.array.isRequired,
};
export default Subject;
