import { useState, useEffect } from 'react'
import './clock.css'
function Clock({ toggle }) {
    const [time, setTime] = useState(new Date());
    let hour = time.getHours() % 12;
    const hours = time.getHours();
    if (hour === 0) {
        hour = 12;
    }
    useEffect(() => {
       const interval = setInterval(() => {
            setTime(new Date())

        }, 1000);
        return () => clearInterval(interval);
    }, [])
    const displayTime = () => {
        return toggle ? (<>
            {(hour)} : {String(time.getMinutes()).padStart(2, "0")} : {String(time.getSeconds()).padStart(2, "0")}{" "}
            {hours >= 12 ? "PM" : "AM"}
        </>) : (<>
            {String(hours).padStart(2, "0")} : {String(time.getMinutes()).padStart(2, "0")} : {String(time.getSeconds()).padStart(2, "0")}
        </>)
    }
    const displayDate = () => {
        return (
            <>
                {String(time.getDate()).padStart(2, "0")} /
                {String(time.getMonth() + 1).padStart(2, "0")} /
                {time.getFullYear()}
            </>
        );
    };

    return (
        <>
            <div className="clockContainer">
                <span>
                    {displayTime()}

                </span>
                <br>
                </br>
                <span className="date">
                    {displayDate()}
                </span>
            </div>
        </>
    )
}

export default Clock