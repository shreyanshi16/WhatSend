import React from "react";

function Logo({ img, alt, title }) {
  return (
    <a href="/">
      <img className="logo" src={img} alt={alt} />
      <p className="title">{title}</p>
    </a>
  );
}

export default Logo;
