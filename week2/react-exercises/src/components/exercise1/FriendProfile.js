import React from "react";

export default function FriendProfile({ friend }) {
  return (
    <div>
      <ul>
        <li>
          <span>Name</span> : {friend.name.first} {friend.name.last}
        </li>
        <li>
          <span>Address</span> : {friend.location.street.name}{" "}
          {friend.location.street.number}{" "}
          <span className='country'>{friend.location.country}</span>
        </li>
        <li>
          <span>e-mail</span> : {friend.email}
        </li>
        <li>
          <span>Phone Number</span> : {friend.phone}
        </li>
      </ul>
    </div>
  );
}
