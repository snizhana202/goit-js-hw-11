import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54209854-0adaa80dd2bf4b1ccab9da3dc';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}
