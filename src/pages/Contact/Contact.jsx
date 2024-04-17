import React from "react";
import "./Contact.css";
import icon_mail from "../../assets/icon-mail.png";
import icon_msg from "../../assets/icon-msg.png";
import icon_phone from "../../assets/icon-phone.png";
import black_arrow from "../../assets/black-arrow.png";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "968084b9-8d0b-4d77-86bc-ba50da33834d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((response) => response.json());

    if (response.success) {
      console.log("Succes", response);
      setResult(response.message);
      event.target.reset();
    } else {
      console.log("Error", response);
      setResult(response.message);
    }
  };

  return (
    <>
      <div className="title">
        <h1>CONTACT</h1>
      </div>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send a message <img src={icon_mail} alt="" />
          </h3>
          <p>
            Feel free to contact us via the contact form or find our contact information below. Your feedback, questions
            and suggestions are important to us as we strive to provide exceptional service to our university community.
          </p>
          <ul>
            <li>
              <img src={icon_msg} alt="" />
              bibica327@gmail.com
            </li>
            <li>
              <img src={icon_phone} alt="" />
              +40719283746
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required />
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn">
              Submit now <img src={black_arrow} alt="" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
}
