import { Button, Span } from "./BackButton.styled";
import { RxDoubleArrowLeft } from "react-icons/rx";

export const BackButton = () => {
  return (
    <Button to="/">
      <RxDoubleArrowLeft />
      <Span>Go Back</Span>
    </Button>
  );
};
