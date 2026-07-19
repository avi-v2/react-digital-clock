import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Clock from './clock'
import Theme from './Theme'
import FormatSwitch from './FormatSwitch'
function App() {
const [dark, setDark] = useState(true);
const [toggle,setToggle] = useState(false);
useEffect(() => {
    document.body.className = dark ? "dark" : "light";
}, [dark]);
  return (
    <>
    <div className={dark ?"dark" : "light"}>
    <FormatSwitch toggle={toggle} setToggle = {setToggle}/>
    <Theme theme = {dark} setter = {setDark}/>
    <Clock toggle = {toggle}/>
      
    </div>
    </>
  )
}

export default App
