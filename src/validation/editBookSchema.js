import * as Yup from 'yup';

const editBookSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  publishedDate: Yup.date().required('Published Date is required'),
  status: Yup.string().required('Status is required'),
  description: Yup.string().required('Description is required'),
  // image?: Yup.string().required('Image is required'),
});

export default editBookSchema;