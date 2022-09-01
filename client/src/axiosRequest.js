import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGUyYTEwMGI1ZDAyYmFkNTQ1ZWZlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjA0ODQ1NCwiZXhwIjoxNjYyNjUzMjU0fQ.IzZUcEYO5XJjrKO7WNvpxkkNaqLojp_-Pa0oiuBNBFs"
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
