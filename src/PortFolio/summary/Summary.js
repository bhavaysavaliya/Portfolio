import React from 'react';
import image from './prof.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

function Summary() {
  return (
    <div
      style={{
        backgroundColor: '#E0E1DD',
        maxWidth: '100%',
        minWidth:"300px",
        margin: '10px',
        borderRadius: '50px',
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50px',
          display: 'block',
          margin: '10px',
          marginRight: '30px',
          float: 'left',
        }}
      >
        <img style={{ width: '300px', height: '300px', borderRadius: '50%' }} src={image} alt="Not found" />
      </div>
      <div
        id="content"
        style={{
          flex: 1,
          maxWidth: '400px',
          minWidth:"300px",
          borderRadius: '50px',
          display: 'block',
          marginLeft: '10px',
          float: 'left',
        }}
      >
        <h1 style={{ marginLeft: '20px', fontSize: '50px', marginTop: '20px' }}>Bhavay Savaliya</h1>
        <p
          style={{
            marginLeft: '20px',
            marginRight: '20px',
            maxHeight: '100%',
            textAlign: 'justify',
            marginBottom: '25px',
          }}
        >
          I am a final year student practicing DSA and OOPS and learning Computer Vision using Deep Learning and
          applying it using React or HTML.
        </p>
        <div style={{ marginLeft: '20px' }}>
          <p style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
            <PhoneIcon style={{ marginRight: '5px', color: 'green' }} />
            <span>88666 26533</span>
          </p>
          <p style={{ display: 'flex', alignItems: 'center', marginTop: '0', marginBottom: '4px' }}>
            <MailIcon style={{ marginRight: '5px', color: 'red' }} />
            <span>bvysavaliya@gmail.com</span>
          </p>
          <a href={'https://github.com/bhavaysavaliya'} target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ color: 'black', marginRight: '10px', marginTop: '5px',marginBottom:"10px" }} />
          </a>
          <a href={'https://www.linkedin.com/in/bhavay-savaliya-2a0482202/'} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon style={{ color: 'blue', marginRight: '10px',marginBottom:"10px" }} />
          </a>
          <a href={'https://www.instagram.com/bhavay_savaliya/'} target="_blank" rel="noopener noreferrer">
            <InstagramIcon style={{ color: '#C13584', background: 'white', borderRadius: '50%',marginBottom:"10px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Summary;
