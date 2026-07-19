import { useState } from 'react'
import './FormatSwitch.css'
function FormatSwitch({toggle,setToggle}){
    
    const handleFormatChange = () => {
        setToggle(toggle ? false : true );
    }
    return(
        <>
            <div className="formatButton">
                <input type="checkbox"  onChange={handleFormatChange} checked={toggle}name="togl" id="toggle"/>
                <label htmlFor="toggle" className = {`Toggle ${toggle ? "active" : ""} `}   > 
                
                </label>
            </div>
        </>
    )
}

export default FormatSwitch