import { FETCH_DATA } from "../constants/actionType";
import { getApidata } from '../api/client'
import Axios from "axios";

// export const getData = (data) => ({
//   type: FETCH_DATA,
//   payload: data,
// });


export const getData = (dispatch) => {
  return Axios.get(getApidata)
  .then((res)=>{
    dispatch(setApiData(res.data))
  })
};

export const setApiData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});