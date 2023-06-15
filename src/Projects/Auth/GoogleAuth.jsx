import React from "react";
import { GoogleAuth } from "../../firebase/firebase";

const GoogleAuthComp = () => {
  async function OnButtonClick() {
    const auth = await GoogleAuth();

    console.log("google Auth: ",auth);
  }

  return (
    <div className="container w-100">
      <button className="btn btn-primary px-4 py-2" onClick={OnButtonClick}>
        Google Login
      </button>
    </div>
  );
};

export default GoogleAuthComp;
