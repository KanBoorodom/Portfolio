import React,{useState} from 'react'
import './navbar.css'
const Navbar = () => {
    const [navActive,setNavActive] = useState(false)
    const clickHandle = ()=>{
        setNavActive(!navActive)
    }
    return (
        <div className = "navbar">
            <div className="navbar__hamburger" onClick = {clickHandle}>
                <div className = {navActive ? 'hamburger__topBar--active' : ''}></div>
                <div className = {navActive ? 'hamburger__botBar--active' : ''}></div>
            </div>
            <nav className = {navActive ? 'navbar__nav--active' : ''}>
                <ul>
                    <li onClick = {clickHandle}><a href="#head">Home</a></li>
                    <li onClick = {clickHandle}><a href="#ab">About</a></li>
                    <li onClick = {clickHandle}><a href="#prj">Project</a></li>
                    <li onClick = {clickHandle}><a href="#ctc">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
