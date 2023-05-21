import styled from "styled-components";

export const Container = styled.div`
  width: 120px;
`;
export const SelectHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  background-color: rgb(235, 216, 255);
  color: rgb(55, 55, 55);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;
  transition: box-shadow 0.3s cubic-bezier(0.5, 0, 0.2, 1);

  :hover {
    box-shadow: rgb(107, 77, 176) 0px 1px 25px 0px,
      rgba(107, 77, 176) 0px 0px 0px 1px;
  }
`;

export const SelectList = styled.ul`
  position: absolute;
  display: flex;
  padding: 10px 5px;
  flex-direction: column;
  border-radius: 10px;
  z-index: 999;
  background-color: rgb(235, 216, 255, 0.7);
  color: rgb(55, 55, 55);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;
  transition: all 0.3s cubic-bezier(0.5, 0, 0.2, 1);
`;

export const SelectItem = styled.li`
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.5, 0, 0.2, 1);

  :hover {
    box-shadow: rgb(107, 77, 176) 0px 1px 25px 0px,
      rgba(107, 77, 176) 0px 0px 0px 1px;
  }
`;
