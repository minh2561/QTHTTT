import { httpGet, httpPost } from "../configs/api";

const getData = () => {
  return httpGet("https://jsonplaceholder.typicode.com/posts");
};

const register = (data) => {
  return httpPost("http://nhatj.id.vn:8088/user/register", data)
}

const login = (data) => {
  return httpPost("http://nhatj.id.vn:8088/user/login", data)
}

export const auth = { getData, register, login };
