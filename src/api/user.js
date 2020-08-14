import axios from "axios";

const client = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0",
});

export const fetchUserById = (id) => {
  return client.get(`/user/${id}.json`).then((response) => response.data);
};
