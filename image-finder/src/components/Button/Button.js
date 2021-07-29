// Описание компонента Button
// При нажатии на кнопку Load more должна догружаться следующая порция изображений и рендериться вместе с предыдущими. После загрузки и рендера новой партии изображений страница должна плавно скролиться. Для скрола используй следующий код.

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });
// Кнопка должна рендерится только тогда, когда есть какие-то загруженные изобаржения. Если массив изображений пуст, кнопка не рендерится.

import React from "react";
import PropTypes from "prop-types";

const Button = ({ onBtnClick, text }) => (
  <button className="Button" id="blink7" type="button" onClick={onBtnClick}>
    {text}
  </button>
);

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
