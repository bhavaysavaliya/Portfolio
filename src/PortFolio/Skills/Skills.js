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
                    <SkillLabel heading={"Programming Languages"} list={["Java (Expert)", "Python (For ML and DL)", "C (Moderate)", "MATLAB"]} />
                    <SkillLabel heading={"Problem Solving Skills"} list={["DSA (Java)", "OOPS (Java)", "System Design (Basic)"]} />
                    <SkillLabel heading={"Frontend"} list={["HTML and EJS", "CSS", "JavaScript", "React (Moderate)"]} />
                    <SkillLabel heading={"Backend & Database"} list={["Node", "Express and Flask", "MongoDB (with Mongoose and with Py_Mongo) & MySQL"]} />
                    <SkillLabel heading={"Machine Learning & Deep Learning"} list={["Libraries: Numpy, Pandas, Scikit-learn, keras, etc.", "Neural Networks", "Computer Vision"]} />
                    <SkillLabel heading={"CS Fundamentals"} list={["Operating Systems", "Computer Networks", "DBMS"]} />
                </div>
            </div>
        </div>
    )
}

export default Skills
