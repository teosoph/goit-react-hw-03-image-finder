// Описание компонента Loader
// Компонент спинера, отображется пока идет загрузка изобаржений. Используй любой готовый компонент, например react-loader-spinner или любой другой.

import React from "react";
import Loader from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div>
      <Loader type="TailSpin" color="#ffc0cb" height={500} width={500} />{" "}
    </div>
  );
};

export default LoaderSpinner;
