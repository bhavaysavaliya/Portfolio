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
                        alignItems:"center"
                    }}>
                    <SkillLabel heading={"Frontend"} list={["HTML and EJS","CSS","JavaScript","React"]} />
                    <SkillLabel heading={"Backend & Database"} list={["Node","Express and Flask","MongoDB (with Mongoose and with Py_Mongo)"]}/>
                    <SkillLabel heading={"Programming Languages"} list={["Java (For DSA and OOPS)","Python (For ML and DL)","C","MATLAB"]}/>
                    <SkillLabel heading={"Machine Learning & Deep Learning"} list={["Libraries: Numpy, Pandas, Scikit-learn, keras, etc.","Neural Networks","Computer Vision"]} />
                </div>
            </div>
        </div>
    )
}

export default Skills
