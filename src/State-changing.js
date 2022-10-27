import { useState } from 'react';
import { Link } from 'react-router-dom';

export const StateChanging = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  console.log('Re-render because of state number: ', state);

  return (
    <>
      <Link to={-1}> Back</Link>

      <h2>Open console, click a button</h2>
      <p>Re-render because of state change should be logged on every click</p>

      <button onClick={onClick}>click here</button>
    </>
  );
};
