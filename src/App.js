import { Routes, Route } from 'react-router-dom';
import { Main } from './Main';
import { StateChanging } from './State-changing';
import { ParentRerender } from './Parent-rerender';
import { ContextChange } from './ContextChange';
import { HookChainChanges } from './HookChainChanges';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/state-changing' element={<StateChanging />} />
      <Route path='/parent-rerender' element={<ParentRerender />} />
      <Route path='/context-changes' element={<ContextChange />} />
      <Route path='/hook-changes' element={<HookChainChanges />} />
    </Routes>
  );
};
