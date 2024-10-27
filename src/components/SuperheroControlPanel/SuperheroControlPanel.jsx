import { useState } from 'react';
import SuperheroForm from '../SuperheroForm/SuperheroForm';
import Modal from '../Modal/Modal';
import css from './SuperheroControlPanel.module.css';

const SuperheroControlPanel = () => {
  const [showModal, setShowModal] = useState(false);

  const onToggleModal = () => setShowModal(!showModal);

  const onCreateSuperhero = () => {
    onToggleModal();
  };
  return (
    <div className={css.superheroControlPanel}>
      <button onClick={onCreateSuperhero}>Create</button>
      {showModal && (
        <Modal onClose={onToggleModal}>
          <SuperheroForm onCloseModal={onToggleModal} />
        </Modal>
      )}
    </div>
  );
};

export default SuperheroControlPanel;
