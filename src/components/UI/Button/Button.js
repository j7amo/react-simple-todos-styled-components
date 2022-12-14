// import styled from "styled-components";
// let's try CSS Modules approach to support separation of concerns in terms of styles being written inside css-files
// 1) we need to rename the file in a special way - add 'module'
// 2) we need to import an object (the object name is up to us) from this file
import styles from "./Button.module.css";

// let's try styled-components approach for styling purposes
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//
//   @media (min-width: 768px) {
//     width: auto;
//   }
//
//   &:focus {
//     outline: none;
//   }
//
//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
