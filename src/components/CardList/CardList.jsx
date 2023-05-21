import { CardItem } from "../CardItem/CardItem";
import { List } from "./CardList.styled";

export const CardList = ({ users, onClick }) => {
  return (
    <List>
      {users.map((item) => (
        <CardItem key={item.id} {...item} onClick={onClick} />
      ))}
    </List>
  );
};
