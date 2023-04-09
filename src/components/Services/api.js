import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

const API_KEY = '34275843-fb055e5d761d9dcd3e0128c31';

export default async function fetchImagesWithQuery(term, page = 1) {
  const response = await axios.get(
    `/api/?q=${term}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  console.log(response);
  return response.data;
}