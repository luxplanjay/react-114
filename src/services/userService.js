import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export const fetchUsers = async () => {
  const res = await axios.get("/users");
  return res.data.users;
};

export const fetchUserById = async (userId) => {
  const res = await axios.get(`/users/${userId}`);
  return res.data;
};

export const fetchUserPosts = async (userId) => {
  const res = await axios.get(`/users/${userId}/posts`);
  return res.data.posts;
};
