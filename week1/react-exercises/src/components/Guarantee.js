import React from "react";

export default function Guarantee(props) {
  console.log(props);
  return (
    <div className='service'>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
