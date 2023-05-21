import { useCallback, useEffect, useState } from "react";
import { BackButton } from "../../components/BackButton/BackButton";
import { CardList } from "../../components/CardList/CardList";
import { LoadMoreButton } from "../../components/LoadMoreButton/LoadMoreButton";
import { getUsers, updateTweets } from "../../services/API";
import { Container, Section } from "./Tweets.styled";

import { useMemo } from "react";
import { all, follow, followings } from "../../utils/constants";
import { FilterTweets } from "../../components/FilterTweets/FilterTweets";
import { scrollOnLoadMore } from "../../utils/scrollOnLoadMore";

export const Tweets = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isActiveBtn, setIsActiveBtn] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getUsers(page);
      setIsActiveBtn(true);

      if (page === 1) {
        setUsers(data);
        setIsActiveBtn(true);
        return;
      }

      if (data.length === 0) {
        setIsActiveBtn(false);
      }
      setUsers((prevState) => [...prevState, ...data]);
    };
    getData();
  }, [page]);

  const handleFollowing = useCallback((id, following) => {
    setUsers((prevState) =>
      prevState.map((user) => {
        if (user.id === id) {
          const updateFollowers = following
            ? user.followers - 1
            : user.followers + 1;

          const updateUser = {
            ...user,
            followers: updateFollowers,
            following: !user.following,
          };
          updateTweets(id, updateFollowers, updateUser.following);
          return updateUser;
        }
        return user;
      })
    );
  }, []);

  const FilteredUsers = useMemo(() => {
    let filtered = users;

    switch (filter) {
      case all:
        return users;

      case follow:
        return (filtered = users.filter((user) => user.following));

      case followings:
        return (filtered = filtered.filter((user) => !user.following));

      default:
        break;
    }
  }, [filter, users]);

  const handleFilterChange = useCallback((filterValue) => {
    setFilter(filterValue);
  }, []);

  const handleLoadMore = () => {
    setPage((pervPage) => pervPage + 1);
    scrollOnLoadMore();
  };

  return (
    <Section>
      <Container>
        <BackButton />
        <FilterTweets handleFilterChange={handleFilterChange} />
      </Container>
      <CardList users={FilteredUsers} onClick={handleFollowing} />
      {isActiveBtn && <LoadMoreButton handleLoadMore={handleLoadMore} />}
    </Section>
  );
};
export default Tweets;
