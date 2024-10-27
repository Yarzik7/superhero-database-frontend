import { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteSuperhero } from '../../../redux/superheroes/operations';
import Modal from '../../Modal/Modal';
import SuperheroForm from '../../SuperheroForm/SuperheroForm';
import css from './SuperheroInfoControlPanel.module.css';

const SuperheroInfoControlPanel = ({ superheroData, setSuperheroData }) => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { superheroId } = useParams();

  const onToggleModal = () => setShowModal(!showModal);

  const onNavigateToBack = async () => {
    navigate(location.state.from.pathname, { replace: true });
  };

  const onDeleteSuperhero = async () => {
    await dispatch(deleteSuperhero(superheroId));
    onNavigateToBack();
  };

  const onUpdateSuperhero = async () => {
    onToggleModal();
  };
  return (
    <div className={css.superheroInfoControlPanel}>
      <button onClick={onNavigateToBack}>Go back</button>
      <button onClick={onUpdateSuperhero}>Edit</button>
      <button onClick={onDeleteSuperhero}>Delete</button>
      {showModal && (
        <Modal onClose={onToggleModal}>
          <SuperheroForm
            currentSuperhero={superheroData}
            onCloseModal={onToggleModal}
            setSuperheroData={setSuperheroData}
          />
        </Modal>
      )}
    </div>
  );
};

export default SuperheroInfoControlPanel;
