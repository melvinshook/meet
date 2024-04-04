import React from "react";
// import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  // const [numberEvents, setNumberEvents] = useState("32");

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);

    // Alerts
    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "Only positive numbers are allowed, please try again";
    } else {
      errorText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <input
        data-testid="numberOfEventsInput"
        type="text"
        className="textboxNumber"
        defaultValue="32"
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
