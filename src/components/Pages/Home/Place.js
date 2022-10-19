import React from "react";

const Place = (props) => {
  return (
    <React.Fragment>
      <div className="list-group-item d-flex justify-content-space-between">
        <div className="d-inline ps-5 pe-5 ">{props.date}</div>
        <div className="d-inline ps-5 pe-5">{props.place}</div>
        <div className="d-inline ps-5 pe-5">{props.specPlace}</div>
        <button className="d-inline btn btn-primary">Buy Ticket</button>
      </div>
    </React.Fragment>
  );
};

export default Place;
