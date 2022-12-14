import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/*another approach is to conditionally set className value with template literals and conditions*/}
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        {/*one way of conditional styles application is using inline style with some conditions*/}
        {/*<label style={{ color: isValid ? "black" : "red" }}>Course Goal</label>*/}
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
          // style={{
          //   border: isValid ? "1px solid black" : "1px solid red",
          //   backgroundColor: isValid ? "transparent" : "salmon",
          // }}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
