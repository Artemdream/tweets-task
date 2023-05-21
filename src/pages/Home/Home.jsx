import bird from "../../images/bird.png";
import { Bacground, Section } from "./Home.styled";

export const Home = () => {
  return (
    <Section>
      <Bacground src={bird} alt="bird" width="60%" />
    </Section>
  );
};
