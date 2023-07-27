import React from 'react'
import ProjectLabel from './ProjectLabel';

function Project() {
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
                    Projects
                </h1>
                <div
                    style={{
                        backgroundColor: "#E0E1DD",
                        maxWidth: "100%",
                        margin: "10px",
                        paddingTop:"20px",
                        paddingBottom:"20px",
                        borderRadius: "50px",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <ProjectLabel heading='My Personal Image Manager' imageurl={"temp.png"} link={"https://bhavaysavaliya.github.io/My_Personal_Image_Manager"}/>
                    <ProjectLabel heading='Dogs Care and Education' imageurl={"dog.png"} link={"https://bhavaysavaliya.github.io/Dogs_Care_and_Education/"}/>
                    <ProjectLabel heading='High Level Security Login' imageurl={"secure.png"}/>
                </div>
            </div>
        </div>
    )
}

export default Project;
