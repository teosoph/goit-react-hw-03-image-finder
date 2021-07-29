// Описание компонента ImageGallery
// Список карточек изображений. Создает DOM-элемент следующей структуры.

// <ul className="ImageGallery">
//   <!-- Набор <li> с изображениями -->
// </ul>

import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ images, onImgClick }) => (
  <ul className="ImageGallery" onClick={onImgClick}>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem key={id} src={webformatURL} largeImg={largeImageURL} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGallery;
