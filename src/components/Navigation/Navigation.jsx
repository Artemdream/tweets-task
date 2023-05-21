import { Link } from "./Navigation.style";

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tweets">Tweets</Link>
    </nav>
  );
};
