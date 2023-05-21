import { statusFilters } from "../../utils/constants";
import { HiMenu } from "react-icons/hi";

import { useState } from "react";
import {
  Container,
  SelectHeader,
  SelectItem,
  SelectList,
} from "./FilterTweets.styled";
import { Span } from "../BackButton/BackButton.styled";

export const FilterTweets = ({ handleFilterChange }) => {
  const [openSelect, setOpenSelect] = useState(false);

  return (
    <Container>
      <SelectHeader
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
      >
        <Span>Filter</Span>
        <HiMenu />
      </SelectHeader>
      {openSelect && (
        <SelectList>
          {Object.keys(statusFilters).map((el) => (
            <SelectItem
              key={Math.random()}
              type="button"
              onClick={() => {
                handleFilterChange(el);
                setOpenSelect(false);
              }}
            >
              {el}
            </SelectItem>
          ))}
        </SelectList>
      )}
    </Container>
  );
};
