// Описание компонента Modal
// При клике по элементу галереи должно открываться модальное окно с темным оверлеем и отображаться большая версия изображения. Модальное окно должно закрываться по нажатию клавиши ESC или по клику на оверлее.

// Внешний вид похож на функционал этого VanillaJS-плагина, только вместо белого модального окна рендерится изображение (в примере нажми Run). Анимацию делать не нужно!

// <div className="Overlay">
//   <div className="Modal">
//     <img src="" alt="" />
//   </div>
// </div>

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.onKeydownClick);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeydownClick);
  }

  onKeydownClick = (e) => {
    const { onCloseModal } = this.props;
    if (e.code === "Escape") {
      onCloseModal();
    }
  };

  render() {
    const { children, onCloseModal } = this.props;
    return (
      <div className="Overlay" onClick={onCloseModal}>
        <div className="Modal">{children}</div>
      </div>
    );
  }
}
