import React from "react";
import { NavLink } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
// import logo from "../ima/rate.svg";
// import logo from "../ima/FinalWebsiteLogo.png";
import logo from "../ima/WebsiteLogo.png";
import "./nav.css";

import { useAuth } from "../store/auth";

function Navbar() {
  const logout = () => {
    document.location = "/";
  };
  const { isLoggedIn } = useAuth();
  return (
    <nav className="header mt-4">
      {isLoggedIn ? (
        <>
          <div className="items flex justify-between py-3">
            <div className="image-area">
              <NavLink className="hover:text-orange-400" to="/Home">
                <img className="Logo-Website" src={logo} alt="" />
              </NavLink>
            </div>
            <div className="text-area flex gap-4">
              <div className="item">
                <NavLink
                  className="hover:bg-blue-600 p-1 rounded transition  hover:text-white text-blue-600 hover:scale-110 civil"
                  to="../departments/Civil"
                >
                  Civil
                </NavLink>
              </div>

              <div className="item">
                <NavLink
                  className="hover:bg-green-600 p-1 rounded transition  hover:text-white text-green-600 hover:scale-125 computer"
                  to="../departments/Computer"
                >
                  Computer
                </NavLink>
              </div>

              <div className="item">
                <NavLink
                  className="hover:bg-pink-600 p-1 rounded transition  hover:text-white text-pink-600 hover:scale-125 architect"
                  to="../departments/Computer"
                >
                  Architect
                </NavLink>
              </div>

              <div className="item hover:scale-110">
                <NavLink
                  className="hover:bg-red-600 p-1 rounded transition  hover:text-white text-red-600"
                  to={"/Logout"}
                >
                  Logout
                </NavLink>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="item">
        <DarkMode />
      </div>
    </nav>
  );
}

export default Navbar;
