import React from "react";

export default function Guarantee({ title, description, img }) {
  return (
    <div className='service'>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
