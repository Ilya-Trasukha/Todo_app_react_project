import React from "react";
import './index.css'
// import classes from "./MyButton.module.css";
const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={'myBtn'}>
      {children}
    </button>
  );
};
export default MyButton;
