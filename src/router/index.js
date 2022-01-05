import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Redirect,
  useLocation,
} from "react-router-dom";
import AddTodos from "../pages/addForm/addTodo";
import ApiData from "../pages/addForm/apiData";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddTodos />} />
          <Route path="/apidata" element={<ApiData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
