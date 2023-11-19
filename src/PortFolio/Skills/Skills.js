import React from 'react'
import SkillLabel from './SkillLabel'

function Skills() {
    return (
        <div
            style={{
                width: "100%"
            }}>
            <div>
                <h1
                    style={{
                        textAlign: "center",
                        backgroundColor: "gold",
                        padding: "10px",
                        margin: "10px",
                        borderRadius: "50px",
                        fontSize: "50px",
                        marginBottom: "0px"
                    }}>
                    Skills
                </h1>
                <div
                    style={{
                        backgroundColor: "#E0E1DD",
                        maxWidth: "100%",
                        margin: "10px",
                        borderRadius: "50px",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <SkillLabel heading={"Core Java"} list={["Spring Boot, Spring MVC", "Hibernate JPA, Spring Security", "Spring REST, JDBC, Maven", "IDE: Spring Tool Suite 4, IntelliJ"]} />
                    <SkillLabel heading={"Problem Solving Skills (Java)"} list={["Data Structure and Algorithms", "Object Oriented Programming","System Design (Moderate)","IDE: IntelliJ, VS Code"]}/>
                    <SkillLabel heading={"Python"} list={["Machine Learnig", "Computer Vision", "Deep Learning","IDE: Jupyter Notebook"]} />
                    <SkillLabel heading={"Frontend"} list={["HTML, CSS, JavaScript, EJS", "React (Moderate), REST API", "IDE: VS Code, Postman"]} />
                    <SkillLabel heading={"Backend & Database"} list={["Node, Flask", "MongoDB, MySQL, PostgreSQL", "IDE: VS Code"]} />
                    <SkillLabel heading={"Deployment Tools"} list={["Tensorflow Serving (For Tensorflow model deployment)", "Docker"]} />
                    <SkillLabel heading={"Operating Systems"} list={["Windows", "Linux","Tools: VM Ware"]}/>
                    <SkillLabel heading={"Other Programming Languages"} list={["C (basic), C++(basic)","MATLAB","Shell Script (Basic)"]}/>
                </div>
            </div>
        </div>
    )
}

export default Skills
