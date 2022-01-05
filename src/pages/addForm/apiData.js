import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";
import { getData } from "../../actions/fetchDataAction";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../components/index";
import { useNavigate } from "react-router-dom";
import { constant } from "../../constants/formConstant";

const ApiData = () => {
  const getApiData = useSelector((state) => state.apiData);
  const dispatch = useDispatch();
  const data = getApiData.apiData;

  const navigate = useNavigate();

  const { back } = constant.formConstant;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      dispatch(getData(res.data));
    });
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((value, index) => (
              <tr key={index}>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.website}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Button
        label={back}
        onClick={() => navigate("/")}
        type="button"
      />
    </>
  );
};

export default ApiData;
