import React from "react";
import ArchiPeople from "./archiPeople/ArchiPeople";
import { Link } from "react-router-dom";

export default function Architect() {
  return (
    <>
      <div className="back">
        <Link to={"/faculty/Faculties"}>Back</Link>
      </div>
      <div className="direction flex justify-center gap-8 my-8 text-xl text-white">
        <div className="previous">
          <Link to={"/departments/Computer"}>
            <button className="bg-green-500 p-2 rounded-2xl hover:bg-white hover:text-green-500 transition hover:scale-110">
              Previous
            </button>
          </Link>
        </div>
        <div className="next">
          <Link to={"/departments/Civil"}>
            <button className=" bg-blue-500 py-2 px-7 rounded-2xl hover:bg-white hover:text-blue-500 transition hover:scale-110">
              Next
            </button>
          </Link>
        </div>
      </div>
      <div className="text-area">
        <div className="welcome">Architect Section</div>
        <div className="detail flex">
          <ArchiPeople />
        </div>
      </div>
    </>
  );
}
