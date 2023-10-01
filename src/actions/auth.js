import { toast } from "react-toastify";
import { constants as c } from "../constants";
import { auth } from "../services/auth";

const getData = () => {
  return async (dispatch) => {
    const response = await auth.getData();
    dispatch({
      type: c.GET_DATA_SUCCESS,
      data: response,
    });
  };
};

const register = (data,onSuccess) => {
  return async (dispatch) => {
    try {
      const response = await auth.register(data)
      if(response.errorCode === 0){
        toast.success(response.messageCode)
        onSuccess()
      }else{
        toast.error(response.messageCode)
      }
    } catch (error) {
      console.log('error',error);
    }
  }
}

export const authAction = { getData,register };
