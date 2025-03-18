import React, { FC } from "react";

interface PaginationProps {
  currentPage: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}

const PaginationComponent: FC<PaginationProps> = ({
  currentPage,
  goToNextPage,
  goToPreviousPage,
}) => {
  return (
    <div className="container mx-auto flex justify-center">
      <button
        className="bg-primary-100 text-primary-200 px-4 py-2 rounded mt-2 mr-2"
        onClick={() => goToPreviousPage()}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className="bg-primary-200 text-primary-100 px-4 py-2 rounded mt-2"
        onClick={() => goToNextPage()}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;
