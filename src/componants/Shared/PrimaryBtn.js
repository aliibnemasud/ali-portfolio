import React from "react";
import { primaryButtonStyle } from "../../utils/styles";

const PrimaryBtn = ({ children, click }) => {
  return (
    <div>
      <button onClick={click} style={primaryButtonStyle}>
        {children}
      </button>
    </div>
  );
};

export default PrimaryBtn;
