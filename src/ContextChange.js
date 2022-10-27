import { useContext, useMemo } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
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

const Child1 = () => {
  const { value } = useValue();
  console.log('Child 1 re-renders: ', value);
  return <div>Child 1: I'll rerender every time you click the button</div>;
};

const Child2 = () => {
  const { value } = useValue();
  console.log('Child 2 re-renders', value);
  return <div>Child 2: I'll rerender every time you click the button</div>;
};

export const ContextChange = () => {
  return (
    <>
      <Link to={-1}> Back</Link>
      <p></p>
      <Provider>
        <h2>Open console, click a button</h2>
        <p>Both children will re-render because of context</p>

        <Child1 />
        <Child2 />
      </Provider>
    </>
  );
};
