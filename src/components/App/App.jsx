import { useState } from 'react';
import { Header, Dashboard, WeightTable, NewLogModal } from 'components';

import './global.scss';

export function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <Header toggleModal={toggleModal} />
      <div className='app__container'>
        <Dashboard />
        <WeightTable />
        <NewLogModal modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
      </div>
    </>
  );
}
