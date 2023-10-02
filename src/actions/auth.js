import { toast } from "react-toastify";
import { auth } from "../services/auth";
import Cookies from "js-cookie";

const register = (data, onSuccess) => {
  return async (dispatch) => {
    try {
      const response = await auth.register(data);
      if (response.errorCode === 0) {
        toast.success(response.messageCode);
        onSuccess();
      } else {
        toast.error(response.messageCode);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

const login = (data, onSuccess) => {
  return async (dispatch) => {
    try {
      const response = await auth.login(data);
      if (response.errorCode === 0) {
        Cookies.set("token", response.data.token);
        toast.success(response.messageCode);
        onSuccess();
      } else {
        toast.error(response.messageCode);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const authAction = {  register, login };
