// Инструкция Pixabay API
// Для HTTP-запросов используй публичный сервис поиска изображений Pixabay. Зарегистрируйся и получи приватный ключ доступа.

// URL-строка HTTP-запроса.

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
// Pixabay API поддерживает пагинацию, по умолчанию параметр page равен 1. Пусть в ответе приходит по 12 объектов, установлено в параметре per_page. Не забудь что при поиске по новому ключевому слову, необходимо сбрасывать значение page в 1.

// В ответе от апи приходит массив объектов, в которых тебе интересны только следущие свойства.

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна

import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

const apiKey = "21420478-fd2340d70fd107c9f0617a1e9";

const fetchServiceApiData = {
  getImages({ query, page, perPage }) {
    return axios
      .get(
        `/?q=${query}&key=${apiKey}&page=${page}&image_type=photo&orientation=horizontal&per_page=${perPage}`
      )
      .then((response) => response.data.hits);
  },
};
export default fetchServiceApiData;
