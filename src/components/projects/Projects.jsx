import React from "react";
import './projects.css';
import laptop from '../../images/laptop.png'

const About = () => {
    return (
        <section className='projects' id="projects">
            <h1>My Portfolio:</h1>

            <div className="projects-container">
                <article className="project-item">
                    <img src={laptop} alt="" className="project-item-img"/>
                    <h2>Pathfinder Visualizer</h2>
                    <h4>Description of Project</h4>
                    <a href="https://github.com/burninglilies/pathfiner-project" className="">BUTTON 1</a>
                </article>
                <article className="project-item">
                    <img src={laptop} alt="" className="project-item-img"/>
                    <h2>Cornell Live</h2>
                    <h4>Description of Project</h4>
                    <a href="https://github.com/burninglilies/cornell-live" className="">BUTTON 1</a>
                </article>
                <article className="project-item">
                    <img src={laptop} alt="" className="project-item-img"/>
                    <h2>Project Title</h2>
                    <h4>Description of Project</h4>
                    <a href="https://github.com/jjennifergu/freelance-marketplace-backend" className="">BUTTON 1</a>
                </article>
            </div>
        </section>
    )
}

export default About