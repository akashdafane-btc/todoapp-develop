import { FETCH_DATA } from "../constants/actionType";

export const getData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});
