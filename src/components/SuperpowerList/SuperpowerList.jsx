import SuperpowerListItem from '../SuperpowerListItem/SuperpowerListItem';
import css from './SuperpowerList.module.css';

const SuperpowerList = ({ data = [], type, onRemoveItem }) => {
  return (
    <ul className={css.superpowerList}>
      {data.map((superpower, idx) => (
        <SuperpowerListItem key={idx} superpowerData={superpower} type={type} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  );
};

export default SuperpowerList;
