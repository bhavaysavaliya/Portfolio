import React from 'react'
function Education() {
    return (
        <div
            style={{
                width: "100%",
            }}>
            <div>
                <h1 style={{
                    textAlign: "center",
                    backgroundColor: "gold",
                    padding: "10px",
                    margin: "10px",
                    borderRadius: "50px",
                    fontSize: "50px",
                    marginBottom: "0px"
                }}>Education</h1>
            </div>
            <div
                style={{
                    backgroundColor: "#E0E1DD",
                    maxWidth: "100%",
                    margin: "10px",
                    borderRadius: "50px",
                    display: "flex",
                    justifyContent: "center",
                }}>
                <div
                    style={{
                        flex: 1,
                        maxWidth: "800px",
                        borderRadius: "50px",
                        display: "block",
                    }}><br/><br/>
                    <h1 style={{ fontSize: "30px", textAlign: "center", margin: "5px" }}>B.Tech in Electronics and Communication Engineering</h1>
                    <p style={{ marginRight: "20px", textAlign: "center", fontSize: "20px" }}>Sardar Vallabhbhai National Institute of Technology</p>
                    <p style={{ marginRight: "20px", textAlign: "center", fontSize: "20px" }}><b>CGPA :</b> 7.26</p>
                    <p style={{ marginRight: "20px", textAlign: "center", fontSize: "20px" }}><b>Year :</b> 2020-24</p><br></br><br></br>
                    <h1 style={{ marginLeft: "20px", fontSize: "30px", textAlign: "center" }}>Secondary School Qualification</h1>
                    <p style={{ marginRight: "20px", textAlign: "center", fontSize: "20px" }}>P. P. Savani Chaitanya Vidhya Sankul</p>
                    <p style={{ marginRight: "20px", textAlign: "center", fontSize: "20px" }}><b>Percentage :</b> 86.00%</p>
                    <p style={{ marginRight: "20px", textAlign: "center", fontSize: "20px" }}><b>Year :</b> 2020</p><br></br><br></br>
                    <h1 style={{ marginLeft: "20px", fontSize: "30px", textAlign: "center" }}>High School Qualification</h1>
                    <p style={{ marginRight: "20px", textAlign: "center", fontSize: "20px" }}>Jawahar Navodaya Vidhyalaya (JNV Tapi)</p>
                    <p style={{ marginRight: "20px", textAlign: "center", fontSize: "20px" }}><b>Percentage :</b> 87.60%</p>
                    <p style={{ marginRight: "20px", textAlign: "center", fontSize: "20px" }}><b>Year :</b> 2018</p>
                </div>
            </div>
        </div>
    )
}

export default Education;