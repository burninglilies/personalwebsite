import React from "react";
import './about.css';
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {MdPictureAsPdf} from 'react-icons/md'

const About = () => {
    return (
        <section className='about'>
            <h2>Hello, my name is Lily Pham!</h2>
            <h4>I am a sophmore at Cornell University studying Computer Science. 
                <br/>I am a fullstack mobile and web developer looking to land an internship for the summer of 2023.</h4>
            <div className="about-links">
                <a href="https://www.linkedin.com/in/lily-pham-7b8593173/" className="about-link"><FaLinkedin className="about-icon"/> LinkedIn</a>
                <a href="https://github.com/burninglilies" className="about-"><FaGithub className="about-icon"/> Github</a>
                <a href="https://lilypham.design" className="about-"><MdPictureAsPdf className="about-icon"/> Resume</a>
            </div>
        </section>
    )
}

export default About