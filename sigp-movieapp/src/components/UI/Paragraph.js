import React from "react";

const Paragraph = ({ label, info }) => {
  return (
    <p>
      <span>{label}</span> {info}
    </p>
  );
};

export default Paragraph;
