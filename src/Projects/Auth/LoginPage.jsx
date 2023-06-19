import React from "react";
import "./style.css";
import { FacebookAuth, GithubAuth, GoogleAuth } from "../../firebase/firebase";

const LoginPage = () => {
  async function OnButtonClick() {
    const auth = await GoogleAuth();

    console.log("google Auth: ", auth);
  }

  async function GithubLogIn() {
    const user = await GithubAuth();
    console.log("github user: ", user);
  }

  async function FacebookAuthButtonClicked() {
    const user = await FacebookAuth();
    console.log("facebook user: ", user);
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

        {/* facebook login */}
        <div className="fw-bold text-center rounded">
          <div className="py-3 rounded" onClick={FacebookAuthButtonClicked}>
            Facebook
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
