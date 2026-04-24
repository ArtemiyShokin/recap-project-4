import { useState, useEffect } from "react";

export default function CopyToClipboard({ color }) {
  const [copyConfirmation, setCopyConfirmation] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopyConfirmation(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [copyConfirmation]);
  async function handleCopyToClipboard() {
    /* warum muss es eine async sein??? */
    navigator.clipboard.writeText(color.hex);
    setCopyConfirmation(!copyConfirmation);
    console.log(color.hex);
    //introduce a three second timer
  }

  return (
    <button
      className="color-card__button--copy"
      onClick={handleCopyToClipboard}
    >
      {copyConfirmation ? "copy button" : "copy success"}
    </button>
  );
}

// https://www.freecodecamp.org/news/how-to-use-settimeout-in-react-using-hooks/
/*
import React, { useState, useEffect } from 'react';

const DelayedMessage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      setMessage('Delayed message after 2 seconds!');
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <DelayedMessage />
    </div>
  );
}

export default App;
*/
