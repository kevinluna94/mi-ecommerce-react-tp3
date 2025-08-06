import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const fetchDestacados = async () => {
  try {
    const response = await axios.get(`${API_URL}/products?limit=4`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    return [];
  }
};