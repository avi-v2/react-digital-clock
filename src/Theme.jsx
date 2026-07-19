import {Sun,Moon} from 'lucide-react';
import './clock.css'
import { useState } from 'react';
function Theme({theme , setter}){
    
    const handleThemeChange = () => {
        theme ? setter (false) : setter(true) 
    }
    return(
        <>
            <div className="themeButton" onClick={handleThemeChange}>
            <Sun className = {theme? "hide" : "show"} />
            <Moon className={theme? "show" : "hide"}/>
            </div> 
        </>
    )
}
export default Theme