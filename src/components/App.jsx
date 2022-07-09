import React from "react";
import Form from "./Form";

var userIsRegistered = false; // we CANT move this variable ??? (meaning + why ???? )

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
