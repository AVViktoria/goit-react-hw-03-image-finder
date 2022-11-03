import axios from 'axios';

// export default async function fetchImages(value, page) {
//   const url = 'https://pixabay.com/api/';
//   const key = '30114983-364137b9a9ec33f130a531f95';
//   const filter = `?q=${value}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`;

//   return await axios.get(`${url}${filter}`).then(response => response.data);
// }

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30114983-364137b9a9ec33f130a531f95';
// const filter = `?q=${value}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`;
const fetchImages = (value, page) => {
  axios
    .get(
      `${value}?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`
    )
    .then(response => response.data.hits);
};

export default fetchImages;
