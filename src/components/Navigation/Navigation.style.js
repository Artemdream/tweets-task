import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav``;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    background-color: rgb(235, 216, 255);
  }
`;
