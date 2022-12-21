
import React from "react";
import { ThemeProvider as LibProvider } from "styled-components";



const ThemeProvider =({theme, children})=>{

return (
  <LibProvider theme={theme} > {children} </LibProvider>
)
}


export default ThemeProvider;