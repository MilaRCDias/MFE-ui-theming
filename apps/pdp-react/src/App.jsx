import ReactDOM from "react-dom";

import React, {useState, useEffect, useRef} from "react";
import Button from "ui_lib/Button";
import ThemeProvider from "ui_lib/ThemeProvider";

export default function App() {
  const [product, setProduct] = useState(null);

  console.log('PDP',)

  const addToCart = useRef(null);
  
const theme = {
  border: {
    color: "green",
    radius: "20px",
  },
  bgColor: "orange",
  fontSize: "20px",
  color: "white",
  hover: {
    color: "blue",
  },
  nav: {
    bgColor: "lime",
    color: "#008B8B",
  },
};
  return (
    <div>
       <ThemeProvider theme={theme}>

      PDP page
      <Button> PDP Button</Button>
      <a href="/">
        <p> link to Home</p>
      </a>
      </ThemeProvider>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById("app"));
