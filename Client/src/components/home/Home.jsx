import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import PreLoader from "../PreLoader";
import "./home.css";

function Home(props) {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.userData.username,
      email: user.userData.email,
      message: "",
    });

    setUserData(false);
  }

  return (
    <div className="body">
      <PreLoader />
      <div className="home text-center">
        Welcome, {contact.username.toUpperCase()}
      </div>
      <div className="main-area">
        <div className="header text-center mt-3 text-5xl font-bold">
          <div className="letters flex justify-center">
            <div className="h transition hover:text-red-500 hover:scale-110">
              H
            </div>
            <div className="o transition hover:text-blue-500 hover:scale-110">
              O
            </div>
            <div className="m transition hover:text-green-500 hover:scale-110">
              M
            </div>
            <div className="e transition hover:text-yellow-500 hover:scale-110">
              E
            </div>
            <div className="- transition hover:text-orange-500 hover:scale-110">
              -
            </div>
            <div className="p transition hover:text-pink-500 hover:scale-110">
              P
            </div>
            <div className="a transition hover:text-red-500 hover:scale-110">
              A
            </div>
            <div className="g transition hover:text-green-500 hover:scale-110">
              G
            </div>
            <div className="e transition hover:text-red-500 hover:scale-110">
              E
            </div>
          </div>
        </div>

        <div className="rate-professor bg-orange-400 h-80 text-center text-4xl text-white my-5 hover:bg-white hover:text-orange-400 transition flex items-center justify-center rounded-xl hover:shadow-xl hover:border-orange-400 ">
          <Link
            className="transition hover:scale-110"
            to="../faculty/Faculties"
          >
            Rate My Professor
          </Link>
        </div>
        <div className=" teacher-details db-area bg-cyan-700 h-80 text-center text-4xl text-white my-5 hover:bg-white hover:text-cyan-700 transition flex items-center justify-center rounded-xl hover:shadow-xl">
          <Link className=" transition hover:scale-110" to={"/TeacherDetails"}>
            Teacher Details
          </Link>
        </div>

        <div className="admin-details db-area bg-red-500 h-80 text-center text-4xl text-white my-5 hover:bg-white hover:text-red-500 transition flex items-center justify-center rounded-xl hover:shadow-xl">
          <Link className=" transition hover:scale-110" to={"/AdminDetails"}>
            Admin Details
          </Link>
        </div>
        <div className="file-transfer db-area bg-green-500 h-80 text-center text-4xl text-white my-5 hover:bg-white hover:text-green-500 transition flex items-center justify-center rounded-xl hover:shadow-xl">
          <Link className=" transition hover:scale-110" to={"/FileTransfer"}>
            File Transfer
          </Link>
        </div>

        <div className="iChat db-area bg-cyan-700 h-80 text-center text-4xl text-white my-5 hover:bg-white hover:text-cyan-700 transition flex items-center justify-center rounded-xl hover:shadow-xl">
          <Link className=" transition hover:scale-110" to={"/Chat"}>
            iChat
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
