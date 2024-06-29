import React from "react";
import { Link } from "react-router-dom";
import logo from "../ima/rate.svg";

function Faculties() {
  return (
    <div>
      <div className="back">
        <Link to="/Home">Back</Link>
      </div>

      <div className="text-area text-center mt-3 text-5xl font-bold">
        Choose Faculty
      </div>

      <div className="image-area flex justify-center my-16">
        <img src={logo} alt="" srcset="" />
      </div>

      <div className="items flex h-50 items-center justify-center text-3xl gap-8 text-white">
        <div className="item">
          <button className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 hover:rounded-2xl hover:scale-110 hover:shadow-xl transition">
            <Link to="../departments/Civil">Civil</Link>
          </button>
        </div>
        <div className="item">
          {" "}
          <button className="bg-green-600 px-6 py-3 rounded-xl hover:bg-white hover:text-green-600 hover:rounded-2xl hover:scale-110 hover:shadow-xl transition">
            <Link to="../departments/Computer">Computer</Link>
          </button>
        </div>
        <div className="item">
          {" "}
          <button className="bg-pink-600 px-6 py-3 rounded-xl hover:bg-white hover:text-pink-600 hover:rounded-2xl hover:scale-110 hover:shadow-xl transition">
            {" "}
            <Link to="../departments/Architect">Architect</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faculties;
