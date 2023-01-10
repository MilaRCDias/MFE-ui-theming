import styled from "styled-components";
import {typography,color} from "styled-system";

const Header = styled.div`
  ${typography}
  ${color}
  background-color: ${(props) => props?.theme?.bg ?? "gray"};
`;
export {Header};
