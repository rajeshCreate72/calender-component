"use client";

import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import DropDown from "./DropDown";
import "react-calendar/dist/Calendar.css";

function CalendarComponent() {
    const [date, setDate] = useState(null);

    const handleChange = (value) => {
        setDate(value);
    };

    useEffect(() => {
        console.log(date);
    }, [date]);

    return (
        <div className="flex flex-col justify-center self-center">
            <div className="m-10">
                <DropDown />
            </div>
            <Calendar
                className="react-calendar rounded-lg shadow-md bg-black self-center"
                onChange={handleChange}
                value={date}
            />
        </div>
    );
}

export default CalendarComponent;
