import React from "react";

export default function DogPhoto({ dogPhotos }) {
  return (
    <div>
      <ul>
        {dogPhotos.map((img, i) => (
          <li key={i}>
            <img
              src={img}
              alt='dog'
              style={{ width: "150px,", height: "100px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
