import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = import.meta.env.VITE_API_KEY;

axios.defaults.baseURL = BASE_URL;

axios
  .get('', {
    params: {
      key: API_KEY,
      q: 'yellow+flowers',
    },
  })
  .then(response => console.log(response))
  .catch(error => console.error(error));
