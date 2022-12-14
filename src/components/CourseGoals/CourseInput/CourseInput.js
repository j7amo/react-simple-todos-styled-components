import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
// import styled from "styled-components";

// const FormControl = styled.div`
//   margin: 0.5rem 0;
//
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }
//
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "#d0aeae" : "#ccc")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     background-color: ${(props) => (props.invalid ? "#d0aeae" : "transparent")};
//   }
//
//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
//
//   //&.invalid label {
//   //  color: red;
//   //}
//
//   //&.invalid input {
//   //  background-color: #d0aeae;
//   //  border-color: red;
//   //}
// `;

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
      {/*<FormControl className={`form-control ${!isValid ? "invalid" : ""}`}>*/}
      {/*when using styled-components we basically use props and work with them inside styled component to
       dynamically evaluate styles*/}
      {/*<FormControl invalid={!isValid}>*/}
      <div
        className={`${styles["form-control"]} ${
          !isValid ? styles.invalid : ""
        }`}
      >
        {/*<div className={styles[`form-control ${!isValid ? "invalid" : ""}`]}>*/}
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
