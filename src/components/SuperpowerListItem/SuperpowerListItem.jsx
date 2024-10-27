import css from './SuperpowerListItem.module.css';

const SuperpowerListItem = ({ superpowerData, type, onRemoveItem }) => {
  return (
    <li className={css.superpowerListItem}>
      {superpowerData}
      {type === 'edit' && (
        <button type="button" onClick={() => onRemoveItem(superpowerData)} className={css.superpowerListItemButton}>
          X
        </button>
      )}
    </li>
  );
};

export default SuperpowerListItem;
