import { createPortal } from 'react-dom';
import ModalBackdrop from './ModalBackdrop/ModalBackdrop';
import ModalContent from './ModalContent/ModalContent';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, withoutDefaultContent = false, children }) => {
  return createPortal(
    <>
      <ModalBackdrop onClose={onClose}>
        {withoutDefaultContent ? <>{children}</> : <ModalContent onClose={onClose}>{children}</ModalContent>}
      </ModalBackdrop>
    </>,
    modalRoot
  );
};

export default Modal;
