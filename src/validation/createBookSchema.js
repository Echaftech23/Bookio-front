import * as Yup from 'yup';

const createBookSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  publishedDate: Yup.date().required('Published Date is required'),
  status: Yup.string().required('Status is required'),
  description: Yup.string().required('Description is required'),
});

export default createBookSchema;