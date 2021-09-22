import React from 'react'
import './project.css'
import ProjectCard from './ProjectCard'
const Project = () => {
    return (
        <section className = "project" id = 'prj'>
            <h2>What did I do</h2>
            <div className = "project__cardontainer">
                <ProjectCard 
                    bg = 'https://github.com/KanBoorodom/Portfolio/blob/master/src/Component/img/myportfolio.PNG?raw=true'
                    name = 'My Portfolio'
                    src = 'https://github.com/KanBoorodom/Portfolio'
                />
                <ProjectCard 
                    className = "cryptoProject"
                    bg = 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
                    name = 'KBCrypto'
                    src = 'https://github.com/KanBoorodom/cryptocurrency'
                />
                <ProjectCard 
                    bg = "https://user-images.githubusercontent.com/78006318/124794969-c68b8000-df79-11eb-860e-eae80aec1530.png"
                    name = 'FAQ'
                    src = 'https://github.com/KanBoorodom/FAQreact'
                />
            </div>
        </section>
    )
}
export default Project
