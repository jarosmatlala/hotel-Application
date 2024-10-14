import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import {addDays,isWeekend} from "date-fns";
import {useState} from "react";
import './DatePicker.css';




function CustomDatePicker(){

const [selectedDate,setSelectedDate] = useState(null);

    const handleDateChange = (date) =>{
        setSelectedDate(date);
    };

    const minDate = new Date ("2023-03-05");
    const maxDate = new Date ("2023-12-30");

    const isWeekendDay = (date) =>{
        return isWeekend (date);
    }

    const filterWeekends = (date) => {
        return !isWeekendDay (date);
    };

    const importantDates = [
        "2023/03/15", "10/20/2023" , "2023/03/20"

    ].map((dateString)=> new Date(dateString) );

    const highlightImportantDates = (date) => {
        const formattedDate = date.toLocalDateString("en-US");
        return importantDates.includes(formattedDate);
    }

    return(
        <div>
            <br/>
            <br/>
            <h3>
            Hello , Please pick a day you want to book  
        </h3>
        <br />
        <br />
        <DatePicker
        inline
        selected ={selectedDate}
        onChange={handleDateChange}
        dateFormat= "MM/dd/yyy;hh:mm"
        minDate={minDate}
        maxDate={maxDate}
        filterDate={filterWeekends}
        showTimeSelect
        timeIntervals={30}
        timeFormat="hh:mm"
        highlightDates={[
            {
              "highlight-important-dates": importantDates, 
            },
        ]}
        />
        
        
        </div>
    )   
}
export default CustomDatePicker;

