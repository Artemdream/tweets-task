import axios from "axios";

axios.defaults.baseURL = "https://64663957228bd07b355f6a3e.mockapi.io/";

export const getUsers = async (page, limit = 3) => {
  try {
    const { data } = await axios.get(`/users?page=${page}&limit=${limit}`);
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
};
