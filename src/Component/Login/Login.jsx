import React, { useState } from "react";
import "./login.css";
import { CreateNewUser, LoginUser } from "../../firebase/firebase";

const Login = () => {
  const [email, setemail] = useState(""); // we will store user email from email input
  const [password, setpassword] = useState(""); // we will store user password from password input

  //   create new user
  const SignUpButton = async () => {
    const user = await CreateNewUser(email, password);
    console.log("User: ", user);
  };

  //   login existing user
  const SignInUser = async () => {
    const user = await LoginUser(email, password);
    console.log("Existing User: ", user);
  };

  return (
    <div class="login-page">
      <div class="login-box">
        <h2 class="heading-login-box">Login</h2>
        <form>
          <div class="user-box">
            <input
              class="user-box-input"
              type="text"
              required
              autoComplete={false}
              onChange={(e) => setemail(e.target.value)} // this will get email from input and store it to email state.
            />
            <label class="user-box-label">Email</label>
          </div>
          <div class="user-box">
            <input
              autoComplete={false}
              class="user-box-input"
              type="password"
              onChange={(e) => setpassword(e.target.value)} // this will get password from password input and store it to password state.
              required
            />
            <label class="user-box-label">Password</label>
          </div>
          <a
            type="submit"
            class="login-box-button"
            onClick={SignInUser}
            href="#"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
