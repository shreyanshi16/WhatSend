import React, { useState } from "react";
import MessageBox from "./MessageBox";
import MessageList from "./MessageList";

function BroadcastMessage() {
  const [phoneNumbers, setPhoneNumbers] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [startMessaging, setStartMessaging] = useState(false);
  const [phoneNumberArray, setPhoneNumberArray] = useState([]);

  const stopMessaging = () => setStartMessaging(false);

  const handleSendMessage = () => {
    setError("");
    try {
      if (phoneNumbers.trim() === "")
        throw new Error("Phone Numbers cannot be empty");
      if (message.trim() === "") throw new Error("Message cannot be empty");
      setPhoneNumberArray(getPhoneNumberArray(phoneNumbers));
      setStartMessaging(true);
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div className="form-wrapper">
      <h2>Send Broadcast Messages</h2>
      <p id="error">{error}</p>
      <MessageBox
        name="Phone Numbers"
        placeholder="All the phone number separate by comma"
        value={phoneNumbers}
        onChange={(phoneNumbers) => setPhoneNumbers(phoneNumbers)}
      />
      <MessageBox
        ame="Message"
        placeholder="Message"
        value={message}
        onChange={(message) => setMessage(message)}
      />
      <button className="message-btn" onClick={handleSendMessage}>
        Send Message
      </button>
      {startMessaging && (
        <MessageList
          stop={stopMessaging}
          message={message}
          phoneNumbers={phoneNumberArray}
        />
      )}
    </div>
  );
}
const getPhoneNumberArray = (phoneNumbers) => {
  let phoneNumbersArray = phoneNumbers.split(",").map((number) => {
    const phoneNumber = number.replace(/^\s+|\s+$/g, "");
    // eslint-disable-next-line
    if (
      !!phoneNumber.match(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
      )
    ) {
      return phoneNumber;
    } else {
      throw new Error("Invalid Phone Numbers");
    }
  });

  return phoneNumbersArray;
};

export default BroadcastMessage;
