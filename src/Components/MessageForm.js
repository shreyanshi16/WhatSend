import React, { useState } from "react";
import PersonalMessage from "./PersonalMessage";
import BroadcastMessage from "./BroadcastMessage";
import Tabs from "./Tabs";

function MessageForm() {
  const [activeTab, setActiveTab] = useState("Personal");
  return (
    <div className="message-form">
      <Tabs
        activeTab={activeTab}
        tabValues={["Personal", "Broadcast"]}
        setActiveTab={setActiveTab}
      />

      {activeTab === "Personal" && <PersonalMessage />}
      {activeTab === "Broadcast" && <BroadcastMessage />}
    </div>
  );
}

export default MessageForm;
