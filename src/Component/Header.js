import React from 'react'
import './header.css'
const Header = () => {
    return (
        <header className = "header" id = {"head"}>
            <div 
            className = "header__imgageContainer">
                {/* <img className = "header__image" src={myImage} alt="mypic" /> */}
            </div>
            <div>
                <p>Hello...</p>
                <p>I'm <span style = {{color:"#DE0000",fontWeight:'700',fontSize:'2rem'}}>Kan Boorodom</span></p>
                <p> I'm a third year computer science student at Ramkamheang University
                    I'm looking for frontend developer internship. 
                </p>
                <p>Download CV</p>
            </div>
        </header>
    )
}

export default Header
