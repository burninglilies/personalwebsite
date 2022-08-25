import React from "react";
import './projects.css';
import laptop from '../../images/laptop.png'
import freelancemarketplace from '../../images/freelance_marketplace-sc.png'
import pathfindervisualizer from '../../images/pathfinder_visualizer-sc.png'

const About = () => {
    return (
        <section className='projects' id="projects">
            <h1>My Portfolio:</h1>

            <div className="projects-container">
                <article className="project-item">
                    <img src={pathfindervisualizer} alt="" className="project-item-img"/>
                    <h2>Pathfinder Visualizer</h2>
                    <h4>Created a visualizer to demonstrate custom implementations of Dijkstra’s algorithm, A*, Random Walk, and other pathfinding algorithms. </h4>
                    <h4>Designed a responsive interface and integrated animations and transitions. Used React, Typescript, HTML, CSS, and Pathfinder Algorithms</h4>
                    <a href="https://github.com/burninglilies/pathfinder-project" className="">SOURCE</a>
                </article>
                <article className="project-item">
                    <img src={freelancemarketplace} alt="" className="project-item-img"/>
                    <h2>Freelance Marketplace</h2>
                    <h4>Collaberative iOS Mobile Application designed for students to sell and purchase services amongst one another.</h4>
                    <h4>Implemented authentication and image processing in Python and contributed to the development and testing of routes.</h4>
                    <h4>Designer and Developers: Clara Lee, Tony Chen, Jennifer Gu, Lily Pham (me), Benjamin Tang </h4>
                    <a href="https://github.com/jjennifergu/freelance-marketplace-backend" className="">SOURCE</a>
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