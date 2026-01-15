import axios from 'axios';

const BASE_URL = 'https://667fb4b4f2cb59c38dc98bf0.mockapi.io/bc69';

export const getProductApi = async () => {
  return axios.get(BASE_URL)
};

export const getProductApiById = async (id)=>{
  return axios.get(`${BASE_URL}/${id}`)
}