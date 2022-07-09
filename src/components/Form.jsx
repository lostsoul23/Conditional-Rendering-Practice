import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      {/* Way 1 */}
      {/* {props.isRegistered === false && (
        <input type="password" placeholder="Confirm Password" />
      )} */}

      {/* Way 2 */}
      {/* {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )} */}

      {/* Way 3 */}
      {/* {props.isRegistered === false ? (
        <input type="password" placeholder="Confirm Password" />
      ) : null} */}

      {/* <input type="password" placeholder="Confirm Password" /> */}

      {/* <button type="submit">Register</button> */}
      <button type="submit">{props.isRegistered ? "login" : "Register"}</button>
    </form>
  );
}

export default Form;
