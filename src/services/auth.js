import { httpGet, httpPost } from "../configs/api";

const getData = () => {
  return httpGet("https://jsonplaceholder.typicode.com/posts");
};

const register = (data) => {
  return httpPost("nhatj.id.vn:8088/user/register", data)
}

export const auth = { getData, register };
