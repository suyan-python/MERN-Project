import React from "react";
import Umesh from "../../ima/civil/umesh.jpeg";
import Rohit from "../../ima/civil/rohit.jpeg";
import HoverRating from "../rating/HoverRating";

export default function CivilPeople() {
  const defaultContactForm = {
    username: "",
    email: "",
    message: "",
  };
  const [contact, setContact] = useState(defaultContactForm);
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

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactForm);
        const data = await response.json();
        console.log(data);
        alert("Feedback Submitted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="person1">
        <div className="image-area">
          <img className="w-2/4 rounded-xl shadow-lg" src={Umesh} alt="" />
        </div>
        <div className="text-area py-3">
          <div className="name">Name: Umesh Raut</div>
          <div className="age">Age: 33</div>
        </div>
        <div className="rating-area">
          <HoverRating />
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            value={contact.message}
            onChange={handleInput}
          />
          <button type="submit">SUBMIT FEEDBACK</button>
        </form>
        <div className="comment-section">
          <div className="submit-sec">
            <button className="bg-orange-500 shadow-md p-1 rounded-md text-white hover:scale-110 hover:bg-orange-700 transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="person1">
        <div className="image-area">
          <img className="w-2/4 rounded-xl shadow-lg" src={Rohit} alt="" />
        </div>
        <div className="text-area py-3">
          <div className="name">Name: Rohit Paudel</div>
          <div className="age">Age: 33</div>
        </div>
        <div className="rating-area">
          <HoverRating />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            value={contact.message}
            onChange={handleInput}
          />
          <button type="submit">SUBMIT FEEDBACK</button>
        </form>
        <div className="comment-section">
          <div className="submit-sec">
            <button className="bg-orange-500 shadow-md p-1 rounded-md text-white hover:scale-110 hover:bg-orange-700 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
