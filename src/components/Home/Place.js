import React from "react";
import classes from "./Place.module.css";
const Place = (props) => {
  return (
    <React.Fragment>
      <div className={`col col-12`}>
        <span className="">{props.date}</span>
        <span className="">{props.place}</span>
        <span className=""> {props.sepcPlace}</span>
        <button className="">BUY TICKETS</button>
      </div>
      <br />
    </React.Fragment>
  );
};

export default Place;
