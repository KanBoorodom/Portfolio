import React,{useState} from 'react'
import './about.css'
import abooutImg from './img/aboutimage.jpg'
const About = () => {
    const [studyExp,setStudyExp] = useState(true)
    const study = [{year:'2012 - 2016                   : ',info:'Graduated from Srinakharinwirot University'},
                    {year:'2019 - Now : ',info:'Ramkhamhaeng University'},
                    {year:'2019 - Now : ',info:'National Institute of Development Administration'},]
    const clickHandle = (e)=>{
        if(e.target.innerHTML !== 'Education' || !studyExp){
            setStudyExp(!studyExp)
        }
    }
    return (
        <section className = "about" id = "ab">
            <h2 className = "about__header">ABOUT <span style = {{color:'#de0000',fontWeight: '700'}}>Kan</span></h2>
            <div className = "about__info">
                <img className = "aboutInfo__img" src= {abooutImg} alt="about pic" />
                <div>
                    <p className = "aboutInfo__p">
                        I use to be a nutritionist but also interesting in coding.
                        I love to create a website and interesting in web design. 
                        I'm ready for a new experience and eager to learn a new thing.
                        I wish I have an oppotunity to work together with you.
                    </p>
                    <h2 style = {{color:'#de0000'}}>My Experience</h2>
                    <div className = "about__experience">
                        <div>
                            <div className = "aboutEx__header">
                                <p className = {studyExp ? 'aboutEx__header--active' : ''} onClick = {clickHandle}>Education</p>
                                <p className = {!studyExp ? 'aboutEx__header--active' : ''} onClick = {clickHandle}>Work</p>
                            </div>
                            <div className = "aboutEx__info">
                                {
                                    studyExp ? study.map((s,index)=>{
                                        return  <p key = {index} style = {{padding:'1em 0',borderBottom:'2px solid #e1b3b3'}}>
                                                    <span style = {{fontWeight:'600'}}>{s.year}</span>
                                                    {s.info}
                                                </p>
                                    })
                                    : 
                                    <p>
                                        <span style = {{fontWeight:'600'}}>2017 - 2019 : </span>
                                        Nutritionist at Sodexo
                                    </p>
                                }
                                <div className = "about__skill">
                                    <h2>My Skill</h2>
                                    <p>HTML,CSS,JS,React JS,Python</p>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
