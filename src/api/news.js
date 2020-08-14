import axios from "axios";
const MAX_LIMIT = 30;

const client = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0",
});

export const fetchDataById = (cancelToken) => (id) => {
  return client
    .get(`item/${id}.json`, { cancelToken })
    .then((response) => response.data);
};

export const fetchNewArticles = ({ page = 0, cancelToken }) => {
  return client
    .get(`/newstories.json`, { cancelToken })
    .then((response) =>
      response.data.slice(page * MAX_LIMIT, (page + 1) * MAX_LIMIT)
    )
    .then((ids) => Promise.all(ids.map(fetchDataById(cancelToken))));
};

export const fetchTopArticles = ({ page = 0, cancelToken }) => {
  return client
    .get("/topstories.json", { cancelToken })
    .then((response) =>
      response.data.slice(page * MAX_LIMIT, (page + 1) * MAX_LIMIT)
    )
    .then((ids) => Promise.all(ids.map(fetchDataById(cancelToken))));
};

export const fetchAskArticles = ({ page = 0, cancelToken }) => {
  return client
    .get("/askstories.json", { cancelToken })
    .then((response) =>
      response.data.slice(page * MAX_LIMIT, (page + 1) * MAX_LIMIT)
    )
    .then((ids) => Promise.all(ids.map(fetchDataById(cancelToken))));
};

export const fetchJobs = ({ page = 0, cancelToken }) => {
  return client
    .get("/jobstories.json", { cancelToken })
    .then((response) =>
      response.data.slice(page * MAX_LIMIT, (page + 1) * MAX_LIMIT)
    )
    .then((ids) => Promise.all(ids.map(fetchDataById(cancelToken))));
};

export const fetchShow = ({ page = 0, cancelToken }) => {
  return client
    .get("/showstories.json", { cancelToken })
    .then((response) =>
      response.data.slice(page * MAX_LIMIT, (page + 1) * MAX_LIMIT)
    )
    .then((ids) => Promise.all(ids.map(fetchDataById(cancelToken))));
};
