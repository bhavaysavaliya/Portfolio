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
            <div style={{ margin: "0 auto" }}>
                <div>
                    <NavBar />
                </div>
                <Element name='home' className='element'>
                    <div style={{ paddingTop: "65px" }}>
                        <Summary />
                    </div>
                </Element>
                <Element name='education' className='element'>
                    <div style={{ paddingTop: "65px" }}>
                        <Education />
                    </div>
                </Element>
                <Element name='projects' className='element'>
                    <div style={{ paddingTop: "65px" }}>
                        <Project />
                    </div>
                </Element>
                <Element name='skills' className='element'>
                    <div style={{ paddingTop: "65px" }}>
                        <Skills />
                    </div>
                </Element>
                <Element name='hobbies' className='element'>
                    <div style={{ paddingTop: "65px" }}>
                        <Hobbies />
                    </div>
                </Element>
            </div>
        </div>
    );
}

export default PortFolio;