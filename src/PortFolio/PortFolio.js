import React from 'react';
import { Element } from 'react-scroll';
import NavBar from './Navbar/NavBar';
import Summary from './summary/Summary';
import Education from './Education/Education';
import Project from './Projects/Project';
import Skills from './Skills/Skills';
import Hobbies from './Hobbies/Hobbies';
function PortFolio() {
    return (
        <div style={{ backgroundColor: "white" }}>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 9999
            }}>
                <NavBar />
            </div>
            <br /><br /><br />
            <Element name='home' className='element'>
                <Summary />
            </Element>
            <br /><br /><br />
            <Element name='education' className='element'>
                <Education />
            </Element>
            <br /><br /><br />
            <Element name='projects' className='element'>
                <Project />
            </Element>
            <br /><br /><br />
            <Element name='skills' className='element'>
                <Skills />
            </Element>
            <br /><br /><br />
            <Element name='hobbies' className='element'>
                <Hobbies />
            </Element>
            <br />
        </div>
    );
}

export default PortFolio;