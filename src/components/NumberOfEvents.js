import React from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);

    // Alerts
    let errorText;
    if (value <= 0) {
      errorText = "The number must be higher than 0.";
    } else {
      errorText = "";
    }

    setCurrentNOE(value);
    // setErrorAlert(errorText);
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
