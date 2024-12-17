import { useState } from "react";
import { MessageContainer } from "./components/MessageContainer/MessageContainer";

// Simulating a function that returns a promise (with rejection for error handling).
function fetchMessage() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("Failed to download message"), 1000)
  );
}

export default function App() {
  const [messagePromise, setMessagePromise] = useState(null); // Store the promise in the state
  const [show, setShow] = useState(false);

  // Trigger the download of the message (sets the promise and shows the MessageContainer).
  function download() {
    setMessagePromise(fetchMessage()); // Assign the promise to state
    setShow(true);
  }

  // If `show` is true, display the MessageContainer, otherwise show the button.
  if (show) {
    return <MessageContainer messagePromise={messagePromise} />;
  } else {
    return <button onClick={download}>Download message</button>;
  }
}
