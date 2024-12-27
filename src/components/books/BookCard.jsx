import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, BookOpen, Pencil, Trash2 } from "lucide-react";
import { formatDate } from "@/helpers/dateHelpers";
import { deleteBook, updateBook } from "@/services/booksService";
import { Button } from "@/components/ui/button";
import DeleteModal from "./modals/DeleteModal";
import EditModal from "./modals/EditModal";
import { toast } from "sonner";

export function BookCard({ book, onDelete, onEdit }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const getStatusColor = (status) => {
    const colors = {
      available: "bg-green-100 text-green-800",
      borrowed: "bg-yellow-100 text-yellow-800",
      reserved: "bg-blue-100 text-blue-800"
    };
    return colors[status.toLowerCase()] || "bg-gray-100 text-gray-800";
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteBook(book._id);
      onDelete(book._id);
      setIsModalOpen(false);
      toast.success("Book deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete book");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEdit = async (updatedBook) => {
    try {
      await updateBook(book._id, updatedBook);
      onEdit(updatedBook);
      setIsEditOpen(false);
      toast.success("Book updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update book");
    }
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold tracking-tight">{book.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{book.author}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(book.status)}`}>
              {book.status}
            </span>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <Calendar className="h-4 w-4 mr-2 opacity-70" />
              <span>{formatDate(book.publishedDate)}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <BookOpen className="h-4 w-4 mr-2 opacity-70" />
              <span className="line-clamp-2">{book.description}</span>
            </div>
          </div>

          <div className="flex justify-end mt-6 space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditOpen(true)}
              className="flex items-center"
            >
              <Pencil className="h-4 w-4 mr-1" />
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsModalOpen(true)}
              className="flex items-center text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete
            </Button>
          </div>
        </div>
      </Card>

      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        isDeleting={isDeleting}
      />

      <EditModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        book={book}
        onBookEdited={handleEdit}
      />
    </>
  );
}