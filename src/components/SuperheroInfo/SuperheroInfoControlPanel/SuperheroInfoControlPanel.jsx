import { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../../redux/superheroes/selectors';
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
  const isLoading = useSelector(selectIsLoading);

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
      <button disabled={isLoading ? true : false} onClick={onNavigateToBack}>
        Go back
      </button>
      <button disabled={isLoading ? true : false} onClick={onUpdateSuperhero}>
        Edit
      </button>
      <button disabled={isLoading ? true : false} onClick={onDeleteSuperhero}>
        Delete
      </button>
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
