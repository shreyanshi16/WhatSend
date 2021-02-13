import React from "react";
import { appName } from "../constants";

function Description() {
  return (
    <div className="description">
      <div className="content">
        <h1>What is {appName}?</h1>
        <p>
          Whatsapp only let's you make calls or messages to the numbers present
          in your contact.
        </p>
        <p>
          But what if you don't want a person in your contact but still want to
          send message?
        </p>
        <p>
          And that's where WhatSend comes in. Just fill the fields and press "Send
          Message" button.
        </p>
      </div>
    </div>
  );
}

export default Description;
