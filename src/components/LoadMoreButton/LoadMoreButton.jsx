import { Button } from "./LoadMoreButton.styled";

export const LoadMoreButton = ({ handleLoadMore }) => {
  return (
    <Button type="button" onClick={handleLoadMore}>
      Load more
    </Button>
  );
};
