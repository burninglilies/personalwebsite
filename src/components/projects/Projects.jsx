import React from "react";
import './projects.css';
import laptop from '../../images/laptop.png'
import freelancemarketplace from '../../images/freelance_marketplace-sc.png'
//import pathfindervisualizer from '../../images/pathfinder_visualizer-sc.png'
import songmatch from '../../images/songmatch-sc.png'

const About = () => {
    return (
        <section className='projects' id="projects">
            <h1>My Portfolio:</h1>

            <div className="projects-container">
                <article className="project-item">
                    <img src={freelancemarketplace} alt="" className="project-item-img"/>
                    <h2>Freelance Marketplace</h2>
                    <h4>Collaberative iOS Mobile Application designed for students to sell and purchase services amongst one another.</h4>
                    <h4>Implemented authentication and image processing in Python and contributed to the development and testing of routes.</h4>
                    <h4>Designer and Developers: Clara Lee, Tony Chen, Jennifer Gu, Lily Pham (me), Benjamin Tang </h4>
                    <ul className="tools-list">
                        <li>Flask</li>
                        <li>Python</li>
                        <li>Authentication</li>
                        <li>Docker</li>
                        <li>XCode</li>
                        <li>Postman</li>
                    </ul>
                    <a href="https://github.com/jjennifergu/freelance-marketplace-backend" className="">SOURCE</a>

                </article>
                <article className="project-item">
                    <img src={songmatch} alt="" className="project-item-img"/>
                    <h2>SongMatch</h2>
                    <h4>Developed Network Manager and Delegation with SwiftUI to integrate a custom external API. Also expanded scalability of design across multiple platforms.</h4>
                    <h4>Designers and Developers: Lily Pham (me), Elizabeth Tang, Heitung Sun, Emily Wang, Jiejun Zhang</h4>
                    <ul className="tools-list">
                        <li>Swift</li>
                        <li>Figma</li>
                        <li>XCode</li>
                        <li>Almofire</li>
                    </ul>
                    <a href="https://github.com/jieunyez/AppDevHack-songmatch" className="">SOURCE</a>
                </article>
                <article className="project-item">
                    <img src={laptop} alt="" className="project-item-img"/>
                    <h2>Pathfinder Visualizer (In Progress)</h2>
                    <h4>Created a visualizer to demonstrate custom implementations of Dijkstra’s algorithm, A*, Random Walk, and other pathfinding algorithms. </h4>
                    <h4>Designed a responsive interface and integrated animations and transitions. Used React, Typescript, HTML, CSS, and Pathfinder Algorithms</h4>
                    <ul className="tools-list">
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>VSCode</li>
                        <li>Figma</li>
                    </ul>
                    <a href="https://github.com/burninglilies/pathfinder-project" className="">SOURCE</a>
                </article>
                <article className="project-item">
                    <img src={laptop} alt="" className="project-item-img"/>
                    <h2>Cornell Live (Coming Soon)</h2>
                    <h4>Coming Soon</h4>
                    <ul className="tools-list">
                        <li>Firebase</li>
                        <li>Next.js</li>
                        <li>OAuth</li>
                        <li>Swift</li>
                        <li>Python</li>
                        <li>Figma</li>
                        <li>SQL</li>
                    </ul>
                    <a href="https://github.com/burninglilies/" className="">SOURCE</a>
                </article>
            </div>
        </section>
    )
}

export default About