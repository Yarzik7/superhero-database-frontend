import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSuperheroById } from '../../redux/superheroes/operations';
import SuperpowerList from '../SuperpowerList/SuperpowerList';
import SuperheroInfoControlPanel from './SuperheroInfoControlPanel/SuperheroInfoControlPanel';
import superheroDefault from '../../assets/images/superhero-default.jpg';
import css from './SuperheroInfo.module.css';

const SuperheroInfo = () => {
  const [superheroData, setSuperheroData] = useState(null);
  const dispatch = useDispatch();
  const { superheroId } = useParams();

  useEffect(() => {
    const getSuperheroData = async () => {
      const result = await dispatch(getSuperheroById(superheroId));

      if (result.error) {
        return;
      }

      setSuperheroData(result.payload);
    };

    getSuperheroData();
  }, [dispatch, superheroId]);

  if (!superheroData) {
    return <></>;
  }

  return (
    <div className={css.superheroInfoContainer}>
      <SuperheroInfoControlPanel superheroData={superheroData} setSuperheroData={setSuperheroData} />

      <ul className={css.superheroPosterThumb}>
        {!superheroData?.images?.length && (
          <li className={css.superheroPosterThumbItem}>
            <img
              src={superheroDefault}
              alt={superheroData.nickname}
              loading="lazy"
              className={css.superheroPosterImg}
            />
          </li>
        )}
        {superheroData?.images &&
          superheroData.images.map(image => (
            <li key={image._id} className={css.superheroPosterThumbItem}>
              <img
                src={image.url ?? superheroDefault}
                alt={superheroData.nickname}
                loading="lazy"
                className={css.superheroPosterImg}
              />
            </li>
          ))}
      </ul>

      <div className={css.superheroInfoContent}>
        <h1 className={css.superheroInfoNickname}>{superheroData.nickname}</h1>
        <h2 className={css.superheroInfoRealName}>{superheroData.real_name}</h2>

        <div className={css.superheroInfoCatchPhraseBox}>
          <h3 className={css.superheroInfoTitle}>Catch phrase: </h3>
          <p>{superheroData.catch_phrase}</p>
        </div>

        <div className={css.superheroInfoSuperpowersBox}>
          <h3 className={css.superheroInfoTitle}>Superpowers: </h3>
          <SuperpowerList data={superheroData.superpowers} />
        </div>

        <div className={css.superheroInfoDescriptionBox}>
          <h3 className={css.superheroInfoTitle}>Description: </h3>
          <p>{superheroData.original_description}</p>
        </div>
      </div>
    </div>
  );
};

export default SuperheroInfo;
