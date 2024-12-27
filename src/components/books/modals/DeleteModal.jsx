import { Button } from "@/components/ui/button";
import { AlertCircle, Loader2 } from "lucide-react";

const DeleteModal = ({ isOpen, onClose, onConfirm, isDeleting }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-xl shadow-xl p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
            <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-500" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Delete Book</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This action cannot be undone.
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-6 dark:text-gray-300 mb-6">
          Are you sure you want to delete this book? All data associated with it will be permanently removed.
        </p>

        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            disabled={isDeleting}
            className="bg-red-600 hover:bg-red-700"
          >
            {isDeleting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              'Delete Book'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;