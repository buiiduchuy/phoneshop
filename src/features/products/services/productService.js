import axios from 'axios';

const BASE_URL = 'https://667fb4b4f2cb59c38dc98bf0.mockapi.io/bc69';

// GET PRODUCT LIST
export const getProductApi = async () => {
  return axios.get(BASE_URL);
};

// GET PRODUCT BY ID
export const getProductApiById = async (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

// ADD PRODUCT
export const createProductApi = async (payload) => {
  return axios.post(BASE_URL, payload);
};

// EDIT PRODUCT
export const editProductApi = async (id, payload) => {
  return axios.put(`${BASE_URL}/${id}`, payload);
};

// DELETE PRODUCT
export const deleteProductApi = async (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
