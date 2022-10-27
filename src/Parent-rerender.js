import { useState } from 'react';
import { Link } from 'react-router-dom';

const Child = () => {
  console.log('Child re-renders');
  return <div>I'll rerender every time you click the button</div>;
};

export const ParentRerender = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  return (
    <>
      <Link to={-1}> Back</Link>
      <p></p>

      <h2>Open console, click a button</h2>
      <p>Re-render because of parent re-render should be logged on every click</p>

      {state}
      <br />
      <button onClick={onClick}>Сlick here</button>

      <Child />
    </>
  );
};
