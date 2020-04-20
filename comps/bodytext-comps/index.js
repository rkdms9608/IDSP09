import React from "react";
import "./bodytext.css";

const BodyText = ({ text, color, fontSize, fontStyle, fontWeight }) => (
  <p style={{
      color: color,
      fontSize: fontSize,
      fontStyle: fontStyle,
      fontWeight,
    }} >
    {text}
  </p>
);

BodyText.defaultProps = {
  text: "default",
  color: "#000000",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "normal",
};

export default BodyText;
