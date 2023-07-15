import React from 'react'

function Hobbies() {
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
                    Hobbies
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
                    }}
                >
                    <ul style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px" }}>
                        <li style={{marginRight:"60px"}}><b>Travelling</b></li>
                        <li style={{marginRight:"60px"}}><b>Chess (Regional Player)</b></li>
                        <li style={{marginRight:"60px"}}><b>Gym</b></li>
                        <li style={{marginRight:"60px"}}><b>Sports (Volleyball, Cycling, Swimming, etc.)</b></li>
                        <li style={{marginRight:"60px"}}><b>Knowing latest trends in gadgets and technologies</b></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Hobbies;