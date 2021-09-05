import React, { useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../sevices/managementSlice";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";

function Management() {
  const dispatch = useDispatch();
  const APIdata = useSelector((state) => state.managementR);
  const history = useHistory();

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div className="table-responsive-sm  ">
      {console.log("API", APIdata.list)}
      <table className="table text-light ">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {APIdata.list.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.roleName}</td>
              <td>
                {item.Actions ? "Active" : "Inactive"}
                <button
                  className="btn btn-outline-warning mx-5"
                  onClick={() => history.push(`/edit/${item.id}`)}
                >
                  <EditIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Management;
