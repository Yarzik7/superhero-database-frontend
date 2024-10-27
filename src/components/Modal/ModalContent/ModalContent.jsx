import css from './ModalContent.module.css';

const ModalContent = ({ onClose, children }) => {
  return (
    <div className={css.modalContent}>
      <button type="button" onClick={onClose} className={css.modalContentCloseButton}>
        Close
      </button>
      {children}
    </div>
  );
};

export default ModalContent;
