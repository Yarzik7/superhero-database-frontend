import { useRef } from 'react';
import superheroDefault from '../../../assets/images/superhero-default.jpg';
import css from './SuperheroImagesControl.module.css';

const SuperheroImagesControl = ({ images, setImages }) => {
  const fileInputRef = useRef(null);

  const onAddElement = () => {
    fileInputRef.current.click();
  };

  const onDeleteElement = e => {
    const imageId = e.target.dataset.imageid;
    setImages(prevImages => {
      const imageToDelete = prevImages.find(({ id }) => id === imageId);
      if (imageToDelete) {
        URL.revokeObjectURL(imageToDelete.src);
      }
      return prevImages.filter(({ id }) => id !== imageId);
    });
  };

  const onFileInputChange = e => {
    const files = [...e.target.files];
    if (files.length > 7) {
      files.splice(7, files.length - 1);
      alert('A maximum of 7 images have been uploaded.');
    }
    // console.log(files);
    const fileUrls = files.map(file => ({ id: crypto.randomUUID(), src: URL.createObjectURL(file), file }));
    // console.log(fileUrls);
    setImages(prev => [...fileUrls, ...prev]);
  };

  return (
    <div className={css.superheroImagesControlBox}>
      <ul className={css.superheroImagesControlList}>
        {images.map(image => (
          <li key={image.id} className={css.superheroImagesControlListItem}>
            <button
              type="button"
              onClick={onDeleteElement}
              data-imageid={image.id}
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
