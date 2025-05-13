import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="text-sm text-gray-500">Showing 4 of 3,248 staff</div>
      <div className="hidden" onClick={() => onPageChange(currentPage)}>
        {currentPage} {totalPages}
      </div>
      <div className="flex items-center gap-2">
        <button
          className="flex items-center justify-center p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled
        >
          <FaChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </button>
        <button className="flex items-center justify-center h-8 w-8 min-w-8 rounded-md border border-gray-300 text-sm text-gray-700 hover:bg-gray-50">
          1
        </button>
        <button className="flex items-center justify-center h-8 w-8 min-w-8 rounded-md border border-gray-300 text-sm text-gray-700 hover:bg-gray-50">
          2
        </button>
        <button className="flex items-center justify-center h-8 w-8 min-w-8 rounded-md border border-gray-300 text-sm text-gray-700 hover:bg-gray-50">
          3
        </button>
        <button className="flex items-center justify-center p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
          <FaChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
