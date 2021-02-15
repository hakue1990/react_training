import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <>
      <form
        autoComplete="off"
        onSubmit={props.submitFn}
        className="Form__wrapper">
        <h2>add new twitter account</h2>
        <input required placeholder="name" name="name" />
        <input required placeholder="link" link="link" />
        <input placeholder="image" image="image" />
        <textarea
          required
          placeholder="description"
          description="description"
        />
        <button type="submit">add item</button>
      </form>
    </>
  );
};

export default Form;
