import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 10px;
  color: rgb(66, 38, 169);
  font-weight: 600;

  &.active {
    box-shadow: rgb(235, 216, 255) 0px 1px 25px 0px,
      rgb(235, 216, 255) 0px 0px 0px 1px;
    color: rgb(235, 216, 255);
  }
`;
