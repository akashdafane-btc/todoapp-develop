import { combineReducers } from 'redux';
import todos from './todoReducer';
import apiData from './fetchDataReducer';



const rootReducer = combineReducers({
  todos,
  apiData,
});



export default rootReducer;

