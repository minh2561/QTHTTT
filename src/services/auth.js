import { httpPost } from "../configs/api";

const register = (data) => {
  return httpPost("http://nhatj.id.vn:8088/user/register", data);
};

const login = (data) => {
  return httpPost("http://nhatj.id.vn:8088/user/login", data);
};

export const auth = { register, login };
