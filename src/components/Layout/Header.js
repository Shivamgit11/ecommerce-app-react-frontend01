import React from "react";
import Button from "../UI/button";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li className="nav-item pe-5 ps-5">
              <Button name="Home" />
            </li>
            <li className="nav-item pe-5 ps-5">
              <Button name="Store" />
            </li>
            <li className="nav-item pe-5 ps-5">
              <Button name="About" />
            </li>
          </ul>
        </div>
        <Button className={"btn btn-dark end-0 pe-3"} name="Cart" onClick={props.onClick} />
      </nav>
      <div className={` ${classes["header-main"]} d-flex justify-content-center`}>
        <h1 className="fs-1">The Generics</h1>
      </div>
    </React.Fragment>
  );
};

export default Header;
