import React, { useState } from "react";
import Button from "../../UI/button";
const Auth = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  const loginStageChange = () => {
    setIsLogIn((prevState) => {
      return !prevState;
    });
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div className="shadow rounded mt-5 p-5">
          {isLogIn ? <h1>Login Page</h1> : <h1>Signup Page</h1>}
          <form>
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">
                Your Email
              </label>
              <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Email" />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
            </div>
            <div className="mb-3">
              <Button type="button">{isLogIn ? "Login" : "Signup"}</Button>
            </div>
          </form>
          <div>
            <Button type="button" onClick={loginStageChange}>
              {isLogIn ? "Create new account" : "Login with existing account"}
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Auth;
