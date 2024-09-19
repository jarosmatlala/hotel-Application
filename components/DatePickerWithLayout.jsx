import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerStyles.css"; 

function DatePickerWithLayout() {
  const [selectedCheckInDate, setSelectedCheckInDate] = useState(null);
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(null);

  return (
    <div className="calendar-container">
      <div className="search-box">
        <div className="search-item">Search Room</div>
        <div className="search-item">
          <label>Check In Dates</label>
          <DatePicker
            selected={CheckInDate}
            onChange={(date) => dispatchEvent(SelectedCheckOutDate(date))}
            placeholderText="Select Check-In Date"
          />
        </div>
        <div className="search-item">
          <label>Check Out Dates</label>
          <DatePicker
            selected={CheckOutDate}
            onChange={(date) => dispatchEvent(SelectedCheckOutDate(date))}
            placeholderText="Select Check-Out Date"
          />
        </div>
        <div className="search-item">Search</div>
      </div>
    </div>
  );
}

export default DatePickerWithLayout;
