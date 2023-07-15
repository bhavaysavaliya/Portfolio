import React from 'react';

function SkillLabel({ heading, list }) {
  return (
    <div
      style={{
        width: "300px",
        minHeight: "250px",
        backgroundColor: "#48CAE4",
        borderRadius:"20px",
        flex: "0 0 auto",
        display: "inline-block",
        margin: "20px"
      }}>
      <h1 style={{ textAlign: "center", minHeight: "100px" }}>{heading}</h1>
      <ul
        style={{
          listStylePosition: "inside",
          alignContent: "center",
          wordBreak: "break-word",
          textIndent: "-20px",
          margin:"10px"
        }}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillLabel;
