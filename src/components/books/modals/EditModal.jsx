import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { X } from 'lucide-react';

const EditModal = ({ isOpen, onClose, book, onBookEdited }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-xl shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Edit Book Details</h2>
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
          initialValues={{ ...book }}
          onSubmit={(values) => {
            onBookEdited(values);
            onClose();
          }}
        >
          {({ errors, touched }) => (
            <Form className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Book Title</label>
                  <Field
                    name="title"
                    as={Input}
                    className={`${
                      errors.title && touched.title 
                        ? 'border-red-500 focus-visible:ring-red-500' 
                        : 'focus-visible:ring-blue-500'
                    }`}
                    placeholder="Enter book title"
                  />
                  <ErrorMessage name="title" component="p" className="mt-1 text-sm text-red-500" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Author</label>
                  <Field
                    name="author"
                    as={Input}
                    className={`${
                      errors.author && touched.author 
                        ? 'border-red-500 focus-visible:ring-red-500' 
                        : 'focus-visible:ring-blue-500'
                    }`}
                    placeholder="Enter author name"
                  />
                  <ErrorMessage name="author" component="p" className="mt-1 text-sm text-red-500" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Publication Date</label>
                  <Field
                    name="publishedDate"
                    type="date"
                    as={Input}
                    className={`${
                      errors.publishedDate && touched.publishedDate 
                        ? 'border-red-500 focus-visible:ring-red-500' 
                        : 'focus-visible:ring-blue-500'
                    }`}
                  />
                  <ErrorMessage name="publishedDate" component="p" className="mt-1 text-sm text-red-500" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Status</label>
                  <Field
                    name="status"
                    as="select"
                    className={`w-full rounded-md border px-3 py-2 ${
                      errors.status && touched.status 
                        ? 'border-red-500 focus-visible:ring-red-500' 
                        : 'border-gray-200 focus-visible:ring-blue-500'
                    }`}
                  >
                    <option value="">Select status</option>
                    <option value="available">Available</option>
                    <option value="borrowed">Borrowed</option>
                    <option value="reserved">Reserved</option>
                  </Field>
                  <ErrorMessage name="status" component="p" className="mt-1 text-sm text-red-500" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Description</label>
                  <Field
                    name="description"
                    as={Textarea}
                    className={`min-h-20 ${
                      errors.description && touched.description 
                        ? 'border-red-500 focus-visible:ring-red-500' 
                        : 'focus-visible:ring-blue-500'
                    }`}
                    placeholder="Enter book description"
                  />
                  <ErrorMessage name="description" component="p" className="mt-1 text-sm text-red-500" />
                </div>
              </div>

              <div className="flex justify-end gap-4 ">
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
                >
                  Save Changes
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditModal;