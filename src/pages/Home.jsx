import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <p>HomePage</p>
      <Link to="/tweets">
        <button>Tweets</button>
      </Link>
    </div>
  );
};
