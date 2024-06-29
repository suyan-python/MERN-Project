import React from "react";
import { Link } from "react-router-dom";

export default function TeacherDetails() {
  return (
    <>
      <div className="back">
        <Link to="/Home">Back</Link>
      </div>
      <div className="container text-center">
        <div className="title">Teacher Details</div>
        <div className="message bg-red-300 h-80">
          Data Are being fetched from backend
        </div>
        <div className="table-section bg-orange-300 h-80">
          This is Table Section
        </div>
      </div>
    </>
  );
}
