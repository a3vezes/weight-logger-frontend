import { Header, Dashboard } from 'components';

import './global.scss';

export function App() {
  return (
    <>
      <Header />
      <div className='app__container'>
        <Dashboard />
        <h1>App</h1>
      </div>
    </>
  );
}
