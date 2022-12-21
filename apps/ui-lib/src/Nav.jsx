import React from "react";
import styled from "styled-components";

const NavBase = ({className, children}) => (
  <nav className={className}>{children}</nav>
);

const NavStyle = styled(NavBase)`
  background: ${(props) => props?.theme?.nav?.bgColor ?? "lightgray"};
  color: ${(props) => props?.theme?.nav?.color ?? "black"};

  font-size: ${(props) => props?.theme?.fontSize ?? "1rem"};
  display: flex;
  justify-content: space-between;
  padding: 0.25em 1em;
  width: auto;
  margin:0;
 
`;

const Nav = ({children}) =>{ 
  return(
    <NavStyle>{children}</NavStyle>
  )
};

export default Nav;
