import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../../redux/superheroes/selectors';
import { deleteSuperheroImage, createSuperheroImage } from '../../../redux/superheroes/operations';
import superheroDefault from '../../../assets/images/superhero-default.jpg';
import css from './SuperheroImagesControl.module.css';

const SuperheroImagesControl = ({ images, setImages, setSuperheroData, superheroId }) => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const onAddElement = () => {
    fileInputRef.current.click();
  };

  const onDeleteElement = async e => {
    const imageId = e.target.dataset.imageid;
    const existImageId = e.target.dataset.existimageid;

    if (!imageId && existImageId) {
      const deleteResult = await dispatch(deleteSuperheroImage(existImageId));

      if (deleteResult.error) {
        alert(deleteResult.payload.message);
        return;
      }

      setImages(prevImages => prevImages.filter(({ _id }) => _id !== existImageId));
      setSuperheroData(prev => {
        const images = prev.images.filter(({ _id }) => _id !== existImageId);
        return { ...prev, images };
      });

      return;
    }

    setImages(prevImages => {
      const imageToDelete = prevImages.find(({ id }) => id === imageId);
      if (imageToDelete) {
        URL.revokeObjectURL(imageToDelete.src);
      }
      return prevImages.filter(({ id }) => id !== imageId);
    });
  };

  const onFileInputChange = async e => {
    const files = [...e.target.files];

    if (files.length > 7) {
      files.splice(7, files.length - 1);
      alert('A maximum of 7 images have been uploaded.');
    }

    const fileUrls = files.map(file => ({ id: crypto.randomUUID(), src: URL.createObjectURL(file), file }));

    if (superheroId) {
      const superheroImageData = new FormData();

      fileUrls.forEach(image => {
        superheroImageData.append('superhero_image', image.file);
      });

      if (superheroImageData.has('superhero_image')) {
        superheroImageData.append('superheroId', superheroId);
        const createImageResult = await dispatch(createSuperheroImage(superheroImageData));

        if (createImageResult.error) {
          alert(createImageResult.payload.message);
          return;
        }

        setImages(prev => [...createImageResult.payload, ...prev]);
        setSuperheroData(prev => {
          const images = [...createImageResult.payload, ...prev.images];
          return { ...prev, images };
        });
      }

      return;
    }

    setImages(prev => [...fileUrls, ...prev]);
  };

  return (
    <div className={css.superheroImagesControlBox}>
      <ul className={css.superheroImagesControlList}>
        {images.map(image => (
          <li key={image._id ?? image.id} className={css.superheroImagesControlListItem}>
            <button
              type="button"
              disabled={isLoading ? true : false}
              onClick={onDeleteElement}
              data-imageid={image.id}
              data-existimageid={image._id}
              className={css.superheroImgDeleteBtn}
            >
              X
            </button>
            <img src={image.url ?? image.src ?? superheroDefault} alt="superhero" className={css.superheroImage} />
          </li>
        ))}
      </ul>

      <div className={css.superheroImagesControlAddBox}>
        <input
          type="file"
          accept="image/png, image/jpeg"
          multiple
          ref={fileInputRef}
          onChange={onFileInputChange}
          className={css.fileInput}
        />
        <button type="button" onClick={onAddElement} className={css.superheroImagesControlAddBtn}>
          +
        </button>
      </div>
    </div>
  );
};

export default SuperheroImagesControl;
