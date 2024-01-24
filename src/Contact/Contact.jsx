import { Box } from "@mui/material";
import React, { useState } from "react";
import "./contact.css";
const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(contactInfo);

  const [focus, setFocus] = useState(false);
  const handleContactInfo = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => {
      const updatedInfo = { ...prevInfo, [name]: value };
      return updatedInfo;
    });
  };

  return (
    <div className="contact--box">
      <Box
        className="contact--content"
        sx={{ width: { xs: "90%", sm: "50%" } }}
      >
        <form style={{ width: "70%", padding: "10px" }} className="content">
          <div>
            <label htmlFor="name">What Is Your Name/Organization Name ?</label>
            <br />
            <input
              name="name"
              type="text"
              id="name"
              onChange={handleContactInfo}
              value={contactInfo.name}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              style={{ color: focus ? "rgb(219, 7, 219)" : "" }}
            />
          </div>

          <div>
            <label htmlFor="email">What Is Your Email?</label>
            <br />
            <input
              name="email"
              type="email"
              id="email"
              onChange={handleContactInfo}
              value={contactInfo.email}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              style={{ color: focus ? "rgb(219, 7, 219)" : "" }}
            />
          </div>

          <div>
            <label htmlFor="message">Leave A Message For Me?</label>
            <br />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              onChange={handleContactInfo}
              value={contactInfo.message}
            ></textarea>
          </div>

          <button className="contact--btn">Send</button>
        </form>
      </Box>
    </div>
  );
};

export default Contact;
