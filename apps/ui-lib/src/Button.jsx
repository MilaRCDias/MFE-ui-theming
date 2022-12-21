import React from "react";
import styled from "styled-components";



const ButtonBase = ({className, children}) => (
  <button className={className}>{children}</button>
);

const ButtonStyle = styled(ButtonBase)`
  background: ${(props) => props?.theme?.bgColor ?? "gray"};
  color: ${(props) => props?.theme?.color ?? "black"};

  font-size: ${(props) => props?.theme?.fontSize ?? "1rem"};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props?.theme?.border?.color ?? "gray"};
  border-radius: ${(props) => props?.theme?.border?.radius ?? "16px"};

  &:hover {
    color: ${(props) => props?.theme?.hover?.color ?? "red"};
    background-color: ${({theme}) => theme?.hover?.bgColor ?? "white"};
  }
`;


const Button = ({children}) => <ButtonStyle>{children}</ButtonStyle>;

export default Button;

