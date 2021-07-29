// Описание компонента ImageGalleryItem
// Компонент элемента списка с изображением. Создает DOM-элемент следующей структуры.

// <li className="ImageGalleryItem">
//   <img src="" alt="" className="ImageGalleryItem-image" />
// </li>

import React from "react";

const ImageGalleryItem = ({ src, largeImg }) => (
  <li className="ImageGalleryItem">
    <img
      className="ImageGalleryItem-image"
      src={src}
      alt="image"
      data-img={largeImg}
    />
  </li>
);

export default ImageGalleryItem;
