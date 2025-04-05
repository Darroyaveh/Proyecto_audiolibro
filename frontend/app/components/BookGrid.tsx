import React, { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import type { Book } from "~/services/bookService";

interface BookGridProps {
  books: Book[];
  isLoading: boolean;
  booksPerPage?: number;
}

const BookGrid: React.FC<BookGridProps> = ({ 
  books, 
  isLoading, 
  booksPerPage = 12 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(books.length / booksPerPage);

  // Reset to first page when books array changes (e.g., new search results)
  useEffect(() => {
    setCurrentPage(1);
  }, [books.length]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">No se encontraron libros que coincidan con tu búsqueda.</p>
        <button
          className="mt-4 px-4 py-2 bg-secondary text-white rounded-md"
          onClick={() => window.location.reload()}
        >
          Limpiar búsqueda
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentBooks.map((book) => (
          <Link
            key={book.id}
            to={`/book/${book.id}`}
            className="book-card bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className="h-64 overflow-hidden relative group">
              <img
                src={book.bookCover || '/img/book-placeholder.jpg'}
                alt={book.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">{book.category}</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-xl mb-2 text-gray-800">{book.title}</h3>
              <p className="text-secondary mb-3">{book.author}</p>
              <p className="text-gray-600 text-sm line-clamp-3">{book.description}</p>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-secondary text-white hover:bg-secondary/90'
            }`}
          >
            Anterior
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === page
                    ? 'bg-secondary text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-secondary text-white hover:bg-secondary/90'
            }`}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default BookGrid;

