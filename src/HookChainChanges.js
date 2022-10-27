import { useState, createContext, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

const Context = createContext({ value: 1 });

const Provider = ({ children }) => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  const value = useMemo(
    () => ({
      value: state,
    }),
    [state]
  );
  return (
    <Context.Provider value={value}>
      <button onClick={onClick}>click here</button>
      {children}
    </Context.Provider>
  );
};

const useValue = () => useContext(Context);

const useSomething = () => {
  useValue();
  return null;
};

const Child = () => {
  const something = useSomething();
  console.log('Child re-renders: ', something);
  return <div>Child: I'll rerender, I have hook</div>;
};

export const HookChainChanges = () => {
  return (
    <>
      <Link to={-1}> Back</Link>
      <p></p>
      <Provider>
        <h2>Open console, click a button</h2>
        <p>Child will re-render because of hooks chain effect</p>

        <Child />
      </Provider>
    </>
  );
};
