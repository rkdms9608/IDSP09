import React from "react";
import "./headertext.css";

const HeaderText = ({ text, color, fontSize, fontStyle, fontWeight }) => (
  <p style={{
      color: color,
      fontSize: fontSize,
      fontStyle: fontStyle,
      fontWeight,
    }} >
    {text}
  </p>
);

HeaderText.defaultProps = {
  text: "default",
  color: "#9cc25b",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "normal",
};

export default HeaderText;
