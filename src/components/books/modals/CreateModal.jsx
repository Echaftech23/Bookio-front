import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Formik } from 'formik';
import { X } from 'lucide-react';
import createBookSchema from '@/validation/createBookSchema';
import { toast } from 'sonner';

const CreateModal = ({ isOpen, onClose, onBookCreated }) => {
  if (!isOpen) return null;

  const initialValues = {
    title: '',
    author: '',
    publishedDate: '',
    status: '',
    description: '',
    image: null
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('author', values.author);
      formData.append('publishedDate', values.publishedDate);
      formData.append('status', values.status);
      formData.append('description', values.description);
      if (values.image) {
        formData.append('file', values.image);
      }

      await onBookCreated(formData);
      resetForm();
      onClose();
      toast.success("Book created successfully!");
    } catch (error) {
      console.error("Failed to create book:", error);
      toast.error("Failed to create book. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-xl shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Create Book</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={createBookSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue
          }) => (
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Book Title</label>
                  <Input
                    type="text"
                    name="title"
                    placeholder="Enter book title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full ${touched.title && errors.title ? 'border-red-500' : ''}`}
                  />
                  {touched.title && errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Author</label>
                  <Input
                    type="text"
                    name="author"
                    placeholder="Enter author name"
                    value={values.author}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full ${touched.author && errors.author ? 'border-red-500' : ''}`}
                  />
                  {touched.author && errors.author && (
                    <p className="text-red-500 text-sm mt-1">{errors.author}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Publication Date</label>
                    <Input
                      type="date"
                      name="publishedDate"
                      value={values.publishedDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full ${touched.publishedDate && errors.publishedDate ? 'border-red-500' : ''}`}
                    />
                    {touched.publishedDate && errors.publishedDate && (
                      <p className="text-red-500 text-sm mt-1">{errors.publishedDate}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Status</label>
                    <select
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full rounded-md border px-3 py-2 ${
                        touched.status && errors.status 
                          ? 'border-red-500' 
                          : 'border-input bg-background'
                      }`}
                    >
                      <option value="">Select status</option>
                      <option value="available">Available</option>
                      <option value="borrowed">Borrowed</option>
                      <option value="reserved">Reserved</option>
                    </select>
                    {touched.status && errors.status && (
                      <p className="text-red-500 text-sm mt-1">{errors.status}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Book Image</label>
                  <Input
                    type="file"
                    accept="image/*"
                    name="file"
                    onChange={(event) => {
                      const file = event.currentTarget.files?.[0];
                      setFieldValue('image', file);
                    }}
                    className={`w-full ${touched.image && errors.image ? 'border-red-500' : ''}`}
                  />
                  {touched.image && errors.image && (
                    <p className="text-red-500 text-sm mt-1">{errors.image}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Description</label>
                  <Textarea
                    name="description"
                    placeholder="Enter book description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`min-h-20 w-full ${
                      touched.description && errors.description ? 'border-red-500' : ''
                    }`}
                  />
                  {touched.description && errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating...' : 'Create Book'}
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateModal;