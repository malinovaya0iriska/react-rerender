import { NavLink } from 'react-router-dom';

export const Main = () => {
  return (
    <div>
      <h2>4 reasons why a component would re-render itself:</h2>
      <ol>
        <li>
          <NavLink to={'/state-changing'}>state changes,</NavLink>
        </li>
        <li>
          <NavLink to={'/parent-rerender'}>parent (or children) re-renders,</NavLink>
        </li>
        <li>
          <NavLink to={'/context-changes'}>context changes,</NavLink>
        </li>
        <li>
          <NavLink to={'/hook-changes'}>hooks changes.</NavLink>
        </li>
      </ol>

      <h2>Re-renders reasons: Myths and Antipattern</h2>
      <ol>
        <li>props changes</li>
        <li>creating components in render function</li>
      </ol>
    </div>
  );
};
