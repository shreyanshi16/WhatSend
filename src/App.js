import Description from "./Components/Description";
import NavBar from "./Components/NavBar";
import MessageForm from "./Components/MessageForm";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main-section">
        <Description />
        <MessageForm />
      </main>
    </div>
  );
}
