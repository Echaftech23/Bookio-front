import axiosInstance from '../config/axios';

const fetchBooks = async (page = 1, limit = 3) => {
  try {
    const response = await axiosInstance.get('/books', {
      params: { page, limit },
    });
    const totalBooks = response.data.totalBooks;
    const totalPages = Math.ceil(totalBooks / limit);
    return {
      data: response.data.books,
      totalPages,
    };
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

const fetchBookById = async (id) => {
  try {
    const response = await axiosInstance.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching book:', error);
    throw error;
  }
};

const createBook = async (bookData) => {
  try {
    const response = await axiosInstance.post('/books',
      bookData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return response.data;
  } catch (error) {
    console.error('Error creating book:', error);
    throw error;
  }
};

const updateBook = async (id, bookData) => {
  try {
    const response = await axiosInstance.patch(`/books/${id}`, 
      bookData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating book:', error);
    throw error;
  }
};

const deleteBook = async (id) => {
  try {
    const response = await axiosInstance.delete(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
};

export { fetchBooks, fetchBookById, createBook, updateBook, deleteBook };