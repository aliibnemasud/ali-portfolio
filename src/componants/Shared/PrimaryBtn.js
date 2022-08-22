import React from 'react';

const PrimaryBtn = ({children}) => {

    const buttonStyle = {
        background: "black",
        padding: "10px 20px",
        color: "white",
        border: "none",
        width: "10%",
        display: "block",
        margin:"0 auto",
    }

    return (
        <div>            
            <button style={buttonStyle} className='hireme'>{children}</button>
        </div >
    );
};

export default PrimaryBtn;