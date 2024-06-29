import React from "react";
import { Link } from "react-router-dom";
import logo from "../ima/WebsiteLogo.png";
import "./verify.css";

export default function Verify() {
  return (
    <div className="main-box flex-row text-center">
      <div className="sub-box">
        <div className="logo flex justify-center">
          <img className="Logo-Website" src={logo} alt="" />
        </div>
        <div className="text">Verify, Yourself</div>

        <div className="verify-button">
          <div className="new-user mt-2">
            <Link to={"/SignUp"}>
              <button className=" btn p-2 bg-red-500 text-white rounded-xl hover:scale-110 transition hover:shadow-xl">
                New User
              </button>
            </Link>
          </div>
          <div className="old-user mt-2">
            <Link to={"/SignIn"}>
              <button className=" btn p-2 bg-red-500 text-white rounded-xl hover:scale-110 transition hover:shadow-xl">
                Old User
              </button>
            </Link>
          </div>
        </div>
        <div className="text-area">
          <div className="title">
            By Signing, You accept all our terms and policies
          </div>
        </div>
        <div className="sub-title">©All rights reserved, Suyan Man Amatya</div>
      </div>
    </div>
  );
}
