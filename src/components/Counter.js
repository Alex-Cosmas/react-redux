import React, { useState } from "react";

export const Counter = () => {
  const [state, setState] = useState({ count: 0 });

  const clickInc = () => {
    setState({
      count: state.count + 1,
    });
  };

  const clickDec = () => {
    setState({
      count: state.count - 1,
    });
  };

  const clickIncby5 = () => {
    setState({
      count: state.count * 5,
    });
  };

  const clickReset = () => {
    setState({
      count: 0,
    });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row my-2">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="h3 display-3">{state.count}</p>

                <button onClick={clickInc} className="btn btn-success">
                  Increment
                </button>
                <button onClick={clickDec} className="btn btn-warning mx-1">
                  Decrement
                </button>
                <button onClick={clickIncby5} className="btn btn-danger mx-1">
                  X by 5
                </button>
                <button onClick={clickReset} className="btn btn-primary mx-1">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
