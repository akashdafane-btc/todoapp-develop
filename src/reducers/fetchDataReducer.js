import { FETCH_DATA } from "../constants/actionType";

const initialState = {
  apiData: [],
};

const apiData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        apiData: action.payload,
      };
    }
    default:
      return state;
  }
};
export default apiData;
