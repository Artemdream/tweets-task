import styled from "styled-components";

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 460px;
  padding: 28px 0 36px;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Link = styled.a`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BgImage = styled.img`
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8px;
  margin: 18px 0 62px 0;

  background-color: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px,
    rgb(174, 123, 227) 0px -2px 3px inset, rgb(251, 248, 255) 0px 3px 3px inset;
`;

export const WrapperAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px,
    rgb(174, 123, 227) 0px -2px 4px inset, rgb(251, 248, 255) 0px 4px 3px inset;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  overflow: hidden;
  width: 62px;
  height: 62px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const ItemButton = styled.button`
  padding: 14px 39px;
  min-width: 196px;
  background-color: ${(props) => (props.value ? "#ebd8ff" : "#5CD3A8")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  color: rgb(55, 55, 55);
  transition: box-shadow 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    box-shadow: rgba(235, 216, 255, 1) 0px 1px 25px 0px,
      rgba(235, 216, 255, 1) 0px 0px 0px 1px;
  }
`;
