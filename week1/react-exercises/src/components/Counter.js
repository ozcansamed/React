import React from "react";

export default function Counter(props) {
  const [count, setCount] = React.useState(0);
  const Feedback = () => {
    return <h6>{count > 10 ? "It's higher than 10!" : "Keep counting..."}</h6>;
  };
  return (
    <div className='counter'>
      <Count count={count} />
      <Feedback />
      <Button setCount={setCount} count={count} />
    </div>
  );
}

export function Count(props) {
  return <p>Count: {props.count}</p>;
}

export function Button(props) {
  return (
    <button
      onClick={() => {
        props.setCount(currentCount => currentCount + 1);
      }}
    >
      Add 1!
    </button>
  );
}
