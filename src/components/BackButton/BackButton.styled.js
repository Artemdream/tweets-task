import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 130px;
  padding: 10px 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: rgb(235, 216, 255);
  color: rgb(55, 55, 55);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;
  transition: box-shadow 0.3s cubic-bezier(0.5, 0, 0.2, 1);

  :hover {
    box-shadow: rgb(107, 77, 176) 0px 1px 25px 0px,
      rgba(107, 77, 176) 0px 0px 0px 1px;
  }
`;

export const Span = styled.span`
  margin: 0 5px;
`;
