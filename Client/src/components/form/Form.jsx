import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState } from "react";
import "./form.css";
import Logo from "../ima/WebsiteLogo.png";

import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/login";

function Form({ props }) {
  const navigate = useNavigate();

  // const tryLogin = async () => {
  //   const name = form.getValues().name;
  //   const password = form.getValues().password;
  //   // console.log(form.getValues());

  //   try {
  //     const res = await axios.post(URL, {
  //       username: name,
  //       password: password,
  //     });
  //     const token = res.data.data.token;

  //     if (res.status === 200) {
  //       props();
  //       navigate("/Home");
  //       // localStorage.setItem("token", token);
  //       storeTokenInLS(token);
  //     }
  //   } catch (e) {
  //     alert("User Invalid");
  //   }
  // };
  const { storeTokenInLS } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert("Login Successful, ", user.username);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("Login Form", response);
      const res_data = await response.json();
      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({
          email: "",
          password: "",
        });
        navigate("/Home");
        window.location.reload();
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        setUser({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="box-signup flex-row text-center mt-10">
      <div className="text-area mb-2">Sign In</div>
      <div className="form-area">
        <form className="content-area" onSubmit={handleSubmit}>
          <div className="email">
            <input
              type="email"
              name="email"
              id="email"
              label="email"
              placeholder="email"
              required
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
            />
          </div>

          <div className="password">
            <input
              type="password"
              name="password"
              id="password"
              label="password"
              placeholder="password"
              required
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <div className="btn-sign">
            <button type="submit" className="px-2 py-1 my-2 rounded-xl">
              SIGN IN
            </button>
          </div>
          <div className="bottom">
            <div className="already">Don't have an account?</div>
            <div className="login">
              <Link to="/SignUp">Sign Up</Link>
            </div>
          </div>
        </form>
        <div className="image-area">
          <img className="Logo-Website" src={Logo} alt="" />
          <div className="title">Welcomes You!</div>
          <div className="description">Let's Dive into the World</div>
        </div>
      </div>
    </div>
  );
}

export default Form;
