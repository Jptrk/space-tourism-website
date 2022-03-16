import React from "react";
import "./Input.css";

const Input = ({ type, value, oninput, error, placeholder }) => {
  return (
    <>
      <input
        className={
          error ? "layout__input layout__input--error" : "layout__input"
        }
        type={type}
        value={value}
        onInput={(e) => oninput(e)}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
