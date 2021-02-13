import React, { useState } from "react";
import MessageBox from "./MessageBox";
import urlencode from "urlencode";
import PhoneInput from "react-phone-input-2";

function PersonalMessage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  let link = `https://api.whatsapp.com/send?phone=${phoneNumber}${
    message && `&text=${urlencode(message)}`
  }`;

  let handleLinkClick = () => {
    if (validatePhoneNumber() && validateMessage()) {
      window.location.assign(link);
    }
  };

  let validatePhoneNumber = () => {
    if (phoneNumber.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[0-9]*$/g)) {
      return true;
    } else {
      setError("Invalid Phone Number");
      return false;
    }
  };

  let validateMessage = () => {
    if (message.length > 250) {
      setError("Message can contain only upto 250 characters");
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Send Personal Message</h2>
      <p id="error">{error}</p>
      <label>
        Phone Number
        <PhoneInput
          country={"in"}
          value={phoneNumber}
          placeholder="+91 987654321"
          onChange={(phone) => setPhoneNumber(phone)}
        />
      </label>
      <MessageBox
        name="Message"
        placeholder="Message (Optional)"
        value={message}
        onChange={(message) => setMessage(message)}
      />
      <button onClick={handleLinkClick} className="message-btn">
        Send Message
      </button>
    </div>
  );
}

export default PersonalMessage;
