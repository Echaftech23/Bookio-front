import apiClient from '../config/axios';

const fetchBooks = async (page = 1, limit = 3) => {
  try {
    const response = await apiClient.get('/books', {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export { fetchBooks };