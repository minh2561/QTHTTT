import { constants as c } from "../constants";

const initialState = {
  loading: true,
  data: []
};
export function testReducer(state = initialState, action) {
  switch (action.type) {
    case c.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}
