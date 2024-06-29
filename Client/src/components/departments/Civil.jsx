import React from "react";
import CivilPeople from "./civilPeople/CivilPeople";
import { Link } from "react-router-dom";

export default function Civil() {
  return (
    <>
      <div className="back">
        <Link to={"/faculty/Faculties"}>Back</Link>
      </div>
      <div className="direction flex justify-center gap-8 my-8 text-xl text-white">
        <div className="previous">
          <Link to={"/departments/Architect"}>
            <button className="bg-pink-500 p-2 rounded-2xl hover:bg-white hover:text-pink-500 transition hover:scale-110">
              Previous
            </button>
          </Link>
        </div>
        <div className="next">
          <Link to={"/departments/Computer"}>
            <button className=" bg-green-500 py-2 px-7 rounded-2xl hover:bg-white hover:text-green-500 transition hover:scale-110">
              Next
            </button>
          </Link>
        </div>
      </div>
      <div className="text-area">
        <div className="welcome">Civil Section</div>
        <div className="detail flex">
          <CivilPeople />
        </div>
      </div>
    </>
  );
}
