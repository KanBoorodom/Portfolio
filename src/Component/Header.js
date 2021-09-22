import React from 'react'
import './header.css'
const Header = () => {
    return (
        <header className = "header" id = {"head"}>
            <div className = "header__container">
                <div 
                    className = "header__imgageContainer">
                </div>
                <div className = 'header__infoContainer'>
                    <p className = "headerInfo__hello">Hello...</p>
                    <div>
                        <p className = "headerInfo__myName">I'm <span style = {{color:"#DE0000",fontWeight:'700',fontSize:'2rem'}}>Kan Boorodom</span></p>
                    </div>
                    <p> I'm a third year computer science student at Ramkamheang University
                        I'm looking for frontend developer internship. 
                    </p>
                    <p className = "header__download">Download CV</p>
                </div>
            </div>
        </header>
    )
}

export default Header
