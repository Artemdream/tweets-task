import axios from "axios";

axios.defaults.baseURL = "https://644fd2faba9f39c6ab6d58fd.mockapi.io";

export const getUsers = async (page, limit = 3) => {
  try {
    const { data } = await axios.get(`/users?page=${page}&limit=${limit}`);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const updateTweets = async (Id, followers, following) => {
  try {
    const { data } = await axios.put(`/users/${Id}`, {
      followers,
      following,
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
