import React, { FC } from "react";

interface PaginationProps {
    currentPage: number;
    goToNextPage: () => void;
    goToPreviousPage: () => void;
}

const PaginationComponent: FC<PaginationProps> = ({ currentPage, goToNextPage, goToPreviousPage }) => {
    return (
        <div className="container">
        <button
          className="bg-primary-500 text-black px-4 py-2 rounded mt-2 mr-2"
          onClick={() => goToPreviousPage()}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-primary-500 text-black px-4 py-2 rounded mt-2"
          onClick={() => goToNextPage()}
        >
          Next
        </button>
      </div>
    );
};

export default PaginationComponent;
