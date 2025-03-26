import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  // Handle Generate button click
  const handleGenerate = () => {
    // Validation
    if (!startDate || !endDate) {
      setError("Both start date and end date are required.");
      return;
    }

    if (startDate > endDate) {
      setError("Start date must be before end date.");
      return;
    }

    setError(""); // Clear error
    setResult({
      startDate: startDate.toLocaleString(),
      endDate: endDate.toLocaleString(),
    });
  };

  // Handle Reset button click
  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    setResult(null);
    setError("");
  };

  return (
    <div className="container">
      <h1>Data Report</h1>

      <div className="form-group">
        <label htmlFor="startDate">Start Date and Time</label>
        <DatePicker
          id="startDate"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          dateFormat="Pp"
          timeIntervals={15} // Time intervals of 15 minutes
          timeCaption="Time"
          placeholderText="Select start date and time"
        />
      </div>

      <div className="form-group">
        <label htmlFor="endDate">End Date and Time</label>
        <DatePicker
          id="endDate"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          showTimeSelect
          dateFormat="Pp"
          timeIntervals={15} // Time intervals of 15 minutes
          timeCaption="Time"
          placeholderText="Select end date and time"
        />
      </div>

      {error && <div className="error">{error}</div>}

      <div className="buttons">
        <button onClick={handleGenerate}>Generate Result</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {result && (
        <div className="result">
          <h3>Results:</h3>
          <p>Start Date and Time: {result.startDate}</p>
          <p>End Date and Time: {result.endDate}</p>
        </div>
      )}
    </div>
  );
}

export default App;
