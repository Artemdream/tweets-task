import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  padding: 14px 20px;
  font-size: 20px;
  min-width: 196px;
  border-radius: 10px;
  margin: 0px auto;
  color: rgb(55, 55, 55);
  background-color: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;
  transition: box-shadow 0.3s cubic-bezier(0.5, 0, 0.2, 1);

  :hover {
    box-shadow: rgb(107, 77, 176) 0px 1px 25px 0px,
      rgba(107, 77, 176) 0px 0px 0px 1px;
  }
`;
