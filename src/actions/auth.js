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

const register = (data) => {
  return async (dispatch) => {
    const response = await auth.register(data)
    
  }
}

export const authAction = { getData };
