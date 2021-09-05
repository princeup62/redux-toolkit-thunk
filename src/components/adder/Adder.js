import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByparam,
} from "../../sevices/adderSlice";

function Adder() {
  const counter = useSelector((state) => state.counter.num);
  const dispatch = useDispatch();
  const [addingString, setAddingString] = useState("");

  const handleString = (event) => {
    setAddingString(event.target.value);
  };

  return (
    <div className="">
      {console.log(counter)}
      <h1 className="text-light">{counter}</h1>
      <div className="d-flex">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(increment())}
        >
          Add
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(decrement())}
        >
          Substract
        </button>
      </div>
      <div className="row mt-5">
        <div className="col-md-5">
          <input
            type="text"
            class="form-control col-md-4"
            placeholder="Add number into counter"
            value={addingString}
            onChange={handleString}
          />
          <button
            className="btn btn-dark"
            onClick={() => dispatch(incrementByparam(addingString))}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Adder;
