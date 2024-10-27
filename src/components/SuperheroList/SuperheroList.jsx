import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSuperheroes } from '../../redux/superheroes/operations';
import { selectSuperheroes, selectIsLoading } from '../../redux/superheroes/selectors';
import SuperheroCard from '../SuperheroCard/SuperheroCard';
import Loader from '../Loader/Loader';
import css from './SuperheroList.module.css';

const SuperheroList = () => {
  const [page, setPage] = useState(1);
  const [isAbleLoadMore, setIsAbleLoadMore] = useState(true);
  const dispatch = useDispatch();
  const superheroes = useSelector(selectSuperheroes);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const getSuperheroesData = async () => {
      const result = await dispatch(getSuperheroes({ page }));
      if (result.error) {
        alert(result.error.message);
        return;
      }

      if (result.payload.length < 5) {
        setIsAbleLoadMore(false);
      } else {
        setIsAbleLoadMore(true);
      }
    };
    getSuperheroesData();
  }, [dispatch, page]);

  const onLoadNext = () => {
    setPage(prev => prev + 1);
  };

  const onLoadPrev = () => {
    setPage(prev => prev - 1);
  };

  if (isLoading) {
    return (
      <div className={css.loaderBox}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <ul className={css.superheroList}>
        {superheroes.map(superhero => (
          <SuperheroCard key={superhero._id} data={superhero} />
        ))}
      </ul>
      <div className={css.buttonsContainer}>
        {page > 1 && (
          <button type="button" onClick={onLoadPrev} className={css.superheroListLoadButton}>
            Prev
          </button>
        )}

        {isAbleLoadMore && (
          <button type="button" onClick={onLoadNext} className={css.superheroListLoadButton}>
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default SuperheroList;
