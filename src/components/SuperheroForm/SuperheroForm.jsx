import { useState } from 'react';
import { createSuperhero, updateSuperhero } from '../../redux/superheroes/operations';
import { useDispatch } from 'react-redux';
import Form from '../Form/Form';
import SuperheroImagesControl from './SuperheroImagesControl/SuperheroImagesControl';
import Input from '../Input/Input';
import SuperpowerList from '../SuperpowerList/SuperpowerList';

const SuperheroForm = ({ currentSuperhero, onCloseModal, setSuperheroData }) => {
  const [nickname, setNickname] = useState(currentSuperhero?.nickname ?? '');
  const [real_name, setRealName] = useState(currentSuperhero?.real_name ?? '');
  const [original_description, setOriginalDescription] = useState(currentSuperhero?.original_description ?? '');
  const [superpower, setSuperpower] = useState('');
  const [superpowers, setSuperpowers] = useState(currentSuperhero?.superpowers ?? []);
  const [catch_phrase, setCatchPhrase] = useState(currentSuperhero?.catch_phrase ?? '');

  const [images, setImages] = useState(currentSuperhero?.images ?? []);

  const dispatch = useDispatch();

  const handleCreateSuperheroData = () => {
    const superheroData = {};

    const superheroDataPairs = Object.entries({
      nickname,
      real_name,
      original_description,
      superpowers,
      catch_phrase,
    });

    for (const [key, value] of superheroDataPairs) {
      if (currentSuperhero?.[key] !== value) {
        superheroData[[key]] = value;
      }
    }

    return superheroData;
  };

  const handleCreateSuperheroImageData = () => {
    const superheroImageData = new FormData();

    images.forEach(image => {
      superheroImageData.append('superhero_image', image.file);
    });

    return superheroImageData;
  };

  const handleSubmit = async () => {
    const superheroData = handleCreateSuperheroData();
    const superheroImageData = handleCreateSuperheroImageData();

    if (!Object.keys(superheroData).length) {
      alert('Update at least one field!');
      return;
    }

    if (!superpowers.length) {
      alert('The set of superpowers cannot be empty');
      return;
    }

    const operationResult = await dispatch(
      currentSuperhero
        ? updateSuperhero({ superheroId: currentSuperhero._id, updData: superheroData })
        : createSuperhero({ superheroData, superheroImageData })
    );

    if (operationResult.error) {
      alert(operationResult.payload?.message);
      return;
    }

    images.forEach(image => {
      image.src && URL.revokeObjectURL(image.src);
    });

    setSuperheroData && setSuperheroData(operationResult.payload);
    reset();
    onCloseModal();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'nickname':
        setNickname(value);
        break;
      case 'real_name':
        setRealName(value);
        break;
      case 'original_description':
        setOriginalDescription(value);
        break;
      case 'superpower':
        setSuperpower(value);
        break;
      case 'catch_phrase':
        setCatchPhrase(value);
        break;
      default:
        return;
    }
  };

  const onAddSuperpower = () => {
    if (!superpower) {
      alert('The superpower field cannot be empty when added');
      return;
    }

    if (superpowers.includes(superpower)) {
      alert('Such a superpower already exists');
      return;
    }
    setSuperpowers(prev => [...prev, superpower]);
    setSuperpower('');
  };

  const onRemoveSuperpower = superpower => {
    setSuperpowers(prev => prev.filter(superpowerPrev => superpowerPrev !== superpower));
  };

  const reset = () => {
    setNickname('');
    setRealName('');
    setOriginalDescription('');
    setSuperpower('');
    setCatchPhrase('');
  };

  return (
    <Form buttonCaption={`${currentSuperhero ? 'Update' : 'Add'} superhero`} onSubmit={handleSubmit}>
      <SuperheroImagesControl
        images={images}
        setImages={setImages}
        setSuperheroData={setSuperheroData}
        superheroId={currentSuperhero?._id}
      />
      <Input label="Nickname" name="nickname" onChange={handleChange} value={nickname} />
      <Input label="Real name" name="real_name" onChange={handleChange} value={real_name} />
      <Input label="Catch phrase" name="catch_phrase" onChange={handleChange} value={catch_phrase} />
      <Input
        label="Superpower"
        name="superpower"
        onChange={handleChange}
        value={superpower}
        withButton
        onButtonClick={onAddSuperpower}
        required={false}
      />
      <SuperpowerList data={superpowers} type="edit" onRemoveItem={onRemoveSuperpower} />
      <Input label="Description" name="original_description" onChange={handleChange} value={original_description} />
    </Form>
  );
};

export default SuperheroForm;
