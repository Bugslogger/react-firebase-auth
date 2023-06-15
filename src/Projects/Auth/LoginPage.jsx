import React from "react";
import "./style.css";
import { GithubAuth, GoogleAuth } from "../../firebase/firebase";

const LoginPage = () => {
  async function OnButtonClick() {
    const auth = await GoogleAuth();

    console.log("google Auth: ", auth);
  }

  async function GithubLogIn() {
    const user = await GithubAuth();
    console.log("github user: ", user);
  }

  return (
    <div className="loginpage p-5 d-flex justify-content-center align-items-center">
      <div>
        <div className="fw-bold text-center rounded">
          <div className="py-3 rounded" onClick={OnButtonClick}>
            Google
          </div>
        </div>
        {/* github login button */}
        <div className="fw-bold text-center rounded">
          <div className="py-3 rounded" onClick={GithubLogIn}>
            Github
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
