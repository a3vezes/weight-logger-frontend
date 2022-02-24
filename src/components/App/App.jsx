import { Header, Dashboard, WeightTable } from 'components';

import './global.scss';

export function App() {
  return (
    <>
      <Header />
      <div className='app__container'>
        <Dashboard />
        <WeightTable />
      </div>
    </>
  );
}
