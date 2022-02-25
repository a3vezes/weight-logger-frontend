import { useState, useContext } from 'react';
import { LogContext } from 'context/LogContext/logContext';
import Modal from 'react-modal';

import styles from './styles.module.scss';
import close from 'assets/close.svg';

Modal.setAppElement('#root');

export function NewLogModal({ modalIsOpen, toggleModal }) {
  const { addNewLog } = useContext(LogContext);

  const [weight, setWeight] = useState(null);
  const [goal, setGoal] = useState(null);
  const [date, setDate] = useState(Date.now());

  async function handleCreateNewLog(event) {
    event.preventDefault();

    addNewLog({
      weight,
    });

    setWeight(null);

    toggleModal();
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      overlayClassName={styles.modal__overlay}
      className={styles.modal}
    >
      <div className={styles.modal__content}>
        <h2>New Weight Log</h2>

        <button type='button' className={styles.modal__close}>
          <img src={close} alt='Close' onClick={toggleModal} />
        </button>

        <form onSubmit={handleCreateNewLog}>
          <input
            type='number'
            min='0'
            step='0.1'
            placeholder='Weight'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          {/* 
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          /> */}

          <input
            type='number'
            min='0'
            step='0.1'
            placeholder='Weight Goal'
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />

          <button type='submit'>Log</button>
        </form>
      </div>
    </Modal>
  );
}
