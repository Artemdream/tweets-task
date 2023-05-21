import BackImg from "../../images/BackImg.png";
import LogoImg from "../../images/LogoImg.png";

import {
  Avatar,
  BgImage,
  Item,
  ItemButton,
  Link,
  Title,
  Wrapper,
  WrapperAvatar,
  WrapperInfo,
} from "./CardItem.styled";

export const CardItem = ({
  id,
  user,
  avatar,
  followers,
  tweets,
  following,
  onClick,
}) => {
  return (
    <Item>
      <Link href="https://goit.global/ua/">
        <img src={LogoImg} alt="logo" />
      </Link>
      <BgImage src={BackImg} alt="background" />

      <Wrapper>
        <WrapperAvatar>
          <Avatar src={avatar} alt={user} loading="lazy" />
        </WrapperAvatar>
      </Wrapper>
      <WrapperInfo>
        <Title>{tweets} TWEETS</Title>
        <Title>{followers.toLocaleString("en-US")} FOLLOWERS</Title>
      </WrapperInfo>
      <ItemButton
        type="button"
        value={following}
        onClick={() => onClick(id, following)}
      >
        {following ? "Follow" : "Following"}
      </ItemButton>
    </Item>
  );
};
