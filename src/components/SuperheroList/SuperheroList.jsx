import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSuperheroes } from '../../redux/superheroes/operations';
import { selectSuperheroes } from '../../redux/superheroes/selectors';
import SuperheroCard from '../SuperheroCard/SuperheroCard';
import css from './SuperheroList.module.css';

const SuperheroList = () => {
  const dispatch = useDispatch();
  const superheroes = useSelector(selectSuperheroes);

  useEffect(() => {
    dispatch(getSuperheroes());
  }, [dispatch]);

  return (
    <ul className={css.superheroList}>
      {superheroes.map(superhero => (
        <SuperheroCard key={superhero._id} data={superhero} />
      ))}
    </ul>
  );
};

export default SuperheroList;
