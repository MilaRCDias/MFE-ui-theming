import ReactDOM from "react-dom";
import React from "react";
import Button from './Button'
import Nav from './Nav'


const App =() => {

  return (
      <div> 
        <Button > Button</Button>
        <Nav><Button>login</Button></Nav>
      </div>

  );
}


ReactDOM.render(<App />, document.getElementById("app"));
