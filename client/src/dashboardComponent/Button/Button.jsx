import React from "react";

const Button = ({ name, bg = "#405cf5" }) => {
  return (
    <button style={{ background: `${bg}`, fontSize: "2.5rem" }} class='button-9' role='button'>
      {name}
    </button>
  );
};

export default Button;
