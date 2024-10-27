import css from './ModalBackdrop.module.css';
import { useEffect } from 'react';

const ModalBackdrop = ({ children, onClose }) => {
  useEffect(() => {
    const handleCloseByEsc = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleCloseByEsc);

    return () => window.removeEventListener('keydown', handleCloseByEsc);
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      {children}
    </div>
  );
};

export default ModalBackdrop;
