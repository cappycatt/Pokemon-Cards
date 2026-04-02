import React from "react";

function Pagination({ totalPages, setCurrentPage, currentPage }) {
  const maxPagesToShow = 3;
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, currentPage + 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="justify-self-center">
      <button
        className="border p-2 hover:bg-emerald-400 hover:text-white w-20 rounded-sm mr-2"
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
      >
        prev
      </button>

      <button
        className={`border p-2 rounded-sm ${
          currentPage === 1
            ? "bg-emerald-400 text-white"
            : "hover:bg-emerald-400 hover:text-white"
        }`}
        onClick={() => setCurrentPage(1)}
      >
        1
      </button>
      {startPage > 2 && <span className="p-2">...</span>}

      {pages.map(
        (page, index) =>
          page !== 1 &&
          page !== totalPages && (
            <button
              className={`border p-2 hover:bg-emerald-400 hover:text-white rounded-sm m-2 ${
                currentPage === page ? "bg-emerald-400 text-white" : ""
              }`}
              key={index}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ),
      )}

      {endPage < totalPages - 1 && <span className="p-2">...</span>}
      <button onClick={() => setCurrentPage(totalPages)}></button>

      {totalPages > 1 && (
        <button
          className={`border p-2 rounded-sm ${
            currentPage === totalPages
              ? "bg-emerald-400 text-white"
              : "hover:bg-emerald-400 hover:text-white"
          }`}
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </button>
      )}

      <button
        className="border p-2 hover:bg-emerald-400 hover:text-white w-20 rounded-sm ml-2"
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
