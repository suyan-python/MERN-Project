import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../store/auth";
import "./signup.css";
import Logo from "../ima/WebsiteLogo.png";

import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/register";

function SignUp({ props }) {
  // const URL = "http://localhost:8080/auth/sign-up";
  // const { storeTokenInLS } = useAuth();

  // const trySignup = async () => {
  //   const name = form.getValues().name;
  //   const password = form.getValues().password;
  //   console.log(name);

  //   try {
  //     const res = await axios.post(URL, {
  //       username: name,
  //       password: password,
  //     });
  //     const token = res.data.data.token;

  //     if (res.status === 200) {
  //       alert("SignUp Success");
  //       navigate("/");
  //       // localStorage.setItem("token", token);
  //       storeTokenInLS(token);
  //     }
  //   } catch (e) {
  //     alert("SignUp Error");
  //     console.log(e);
  //   }
  // };

  // const form = useForm({
  //   mode: "uncontrolled",
  //   initialValues: {
  //     name: "",
  //     password: "",
  //   },
  // });

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

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
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      console.log("Response from server", res_data.extraDetails);

      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success("Registration Successful");
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/SignIn");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="box flex-row text-center mt-10">
      <div className="text-area mb-2">Sign Up</div>

      <div className="form-area">
        <form className="content-area" onSubmit={handleSubmit}>
          <div className="username">
            <p>Hello Friend,</p>
            <input
              type="text"
              name="username"
              id="username"
              label="username"
              placeholder="username"
              required
              autoComplete="off"
              value={user.username}
              onChange={handleInput}
            />
          </div>
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
          <div className="phone">
            <input
              type="number"
              name="phone"
              id="phone"
              label="phone"
              placeholder="phone"
              required
              autoComplete="off"
              value={user.phone}
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
            <button
              type="submit"
              className="text-white px-2 py-1 my-2 rounded-xl"
            >
              CREATE ACCOUNT
            </button>
          </div>
          <div className="bottom">
            <div className="already">Already have an account?</div>
            <div className="login">
              <Link to="/SignIn">Sign In</Link>
            </div>
          </div>
        </form>
        <div className="image-area">
          <img className="Logo-Website" src={Logo} alt="" />
          <div className="title">Glad To See You!</div>
          <div className="description">Hope you enjoy your experience here</div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
