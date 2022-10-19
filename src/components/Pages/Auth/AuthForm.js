import React, { useRef, useState } from "react";
import Button from "../../UI/button";
import { KEY } from "../../../default";
import axios from "axios";
const Auth = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const userEmailRef = useRef();
  const userPasswordRef = useRef();

  const loginStageChange = () => {
    setIsLogIn((prevState) => {
      return !prevState;
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const userEmail = userEmailRef.current.value;
    const userPassword = userPasswordRef.current.value;

    if (isLogIn) {
    } else {
      try {
        const response = await axios({
          method: "POST",
          url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${KEY}`,
          data: {
            email: userEmail,
            password: userPassword,
          },
        });

        if (Number(response.status) === 200 || Number(response.status) === 201) {
          alert("User Registration Done");
          setIsLogIn((prevState) => {
            return !prevState;
          });
        } else {
          alert(response.status + "Error");
        }
      } catch (err) {
        alert(err.message);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div className="shadow rounded mt-5 p-5">
          {isLogIn ? <h2 className="text-center">Login Page</h2> : <h2 className="text-center">Signup Page</h2>}
          <form className="mt-2" onSubmit={submitHandler}>
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">
                Your Email
              </label>
              <input type="email" className="form-control" ref={userEmailRef} placeholder="Email" defaultValue={""} />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" ref={userPasswordRef} placeholder="Another input placeholder" defaultValue={""} />
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
