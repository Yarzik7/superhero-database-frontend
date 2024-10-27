import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import superheroDefault from '../../assets/images/superhero-default.jpg';
import css from './SuperheroCard.module.css';

const SuperheroCard = ({ data }) => {
  const location = useLocation();
  return (
    <li className={css.superheroCard}>
      <Link to={`/${data._id}`} state={{ from: location }} className={css.superheroCardLink}>
        <div className={css.superheroPosterThumb}>
          <img src={superheroDefault} alt={data.nickname} loading="lazy" className={css.superheroPosterImg} />
        </div>
        <div className={css.superheroCardContent}>
          <h3 className={css.superheroCardNickname}>{data.nickname}</h3>
        </div>
      </Link>
    </li>
  );
};

export default SuperheroCard;
