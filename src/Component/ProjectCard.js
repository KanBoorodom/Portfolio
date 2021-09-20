import React from 'react'
import './project.css'
const ProjectCard = ({bg,name,src}) => {
    return (
        <div className = "project__card" style = {{backgroundImage:`url(${bg})`}}>
            <p className = "projectCard__name">{name}</p>
            <a className = "projectCard__btn" href={src}>View Detail</a>
        </div>
    )
}

export default ProjectCard
