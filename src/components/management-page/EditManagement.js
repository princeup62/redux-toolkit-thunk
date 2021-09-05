import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editGetData, editpostData } from "../../sevices/EditSlice";
import { useHistory, withRouter } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditManagement() {
  const editApiData = useSelector((state) => state.editManagementR.data);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log("PARAMS", useParams());

  const params = useParams().id;

  const [editData, setEditData] = useState({
    roleName: "",
    Actions: false,
    id: 0,
  });

  useEffect(() => {
    dispatch(editGetData(params));
  }, []);

  useEffect(() => {
    setEditData({
      roleName: editApiData.roleName,
      Actions: editApiData.Actions,
      id: editApiData.id,
    });
  }, [editApiData]);

  return (
    <div className="row">
      <div className="col-md-6 p-5 bg-light rounded mx-auto">
        {console.log("Edit", editApiData)}
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Role Name</label>
            <input
              type="text"
              className="form-control"
              value={editData.roleName}
              onChange={(event) =>
                setEditData({ ...editData, roleName: event.target.value })
              }
            />
          </div>

          <h1
            onClick={() =>
              setEditData({ ...editData, Actions: !editData.Actions })
            }
          >
            {editData.Actions ? "on" : "off"}
          </h1>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => {
              event.preventDefault();
              dispatch(editpostData(editData));
              history.push("/");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditManagement;
