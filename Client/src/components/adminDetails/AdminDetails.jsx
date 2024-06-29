import Logo from "../ima/Admin.jpg";
import { useAuth } from "../store/auth";

import "./admin.css";

function AdminDetails() {
  const { services } = useAuth();
  return (
    <>
      <div className="back"></div>
      <section className="">
        <div className="container">
          <h1>Admin Details</h1>
        </div>

        <div className="container my-10 grid grid-cols-3">
          {services.map((curElem, index) => {
            const { username, email, phone } = curElem;

            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <img src={Logo} alt="" width="200" />
                </div>
                <div className="card-details">
                  <div className="grid grid-cols-2">
                    <p>Username: {username} </p>
                  </div>
                  <p>Email: {email} </p>
                  <p>Contact: {phone}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default AdminDetails;
