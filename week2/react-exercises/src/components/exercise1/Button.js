import React from "react";

export default function Button({ getFriend }) {
  return <button onClick={getFriend}>Get a friend!</button>;
}
