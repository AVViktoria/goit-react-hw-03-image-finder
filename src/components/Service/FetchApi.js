import axios from 'axios';

export default async function fetchImages(searchQuery, page) {
  const url = 'https://pixabay.com/api/';
  const key = '30114983-364137b9a9ec33f130a531f95';
  const filter = `?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`;

  return await axios.get(`${url}${filter}`).then(response => response.data);
}
