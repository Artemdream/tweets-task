import { Link, Nav } from "./Navigation.style";

export const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/tweets">Tweets</Link>
    </Nav>
  );
};
