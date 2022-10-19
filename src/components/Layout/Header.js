import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/button";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li className="nav-item pe-5 ps-5">
              <NavLink to="/" className="nav-link text-white" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item pe-5 ps-5">
              <NavLink to="/store" className="nav-link text-white" activeClassName="active">
                Store
              </NavLink>
            </li>
            <li className="nav-item pe-5 ps-5">
              <Button>About</Button>
            </li>
          </ul>
        </div>

        <NavLink to="/auth" className={"nav-link text-white end-0 pe-3"}>
          Signup
        </NavLink>
        <Button className={"btn btn-dark end-0 pe-3"} onClick={props.onClick}>
          Cart
        </Button>
      </nav>
      <div className={` ${classes["header-main"]} d-flex justify-content-center`}>
        <h1 className="fs-1">The Generics</h1>
      </div>
    </React.Fragment>
  );
};

export default Header;
