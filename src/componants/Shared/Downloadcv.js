import React from 'react';
import Resume from '../Files/Resume of Ali Ibne Masud.pdf';

const DownloadResume = () => {

        const buttonStyle = {
            background: "black",
            padding: "10px 20px",
            color: "white",
            border: "none",
            display: "block",            
            textDecoration: "none",
            width: "190px"
        }
        
        return (
            <a style={buttonStyle} className="mt-5" href={Resume} download >Download Resume</a>
        );
    };

export default DownloadResume;