import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import { getBooks, type Book } from "~/services/bookService";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export default function Books() {
    const [books, setBooks] = useState<Book[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

    useEffect(() => {

        // Simulate API call delay
        const loadBooks = async () => {
            setIsLoading(true);


            // In a real app, this would be an API call
            setTimeout(() => {
                const fetchedBooks = getBooks();
                setBooks(fetchedBooks);
                setFilteredBooks(fetchedBooks);
                setIsLoading(false);
            }, 600);
        };

        loadBooks();
    }, []);

    useEffect(() => {
        const results = books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBooks(results);
    }, [searchTerm, books]);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow bg-gray-50">
                {/* Header with background */}
                <div className="bg-primary text-white py-12">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-4">Biblioteca</h1>
                        <p className="text-xl max-w-3xl">
                            Explora nuestra colección de libros para todas las edades. Encuentra historias que inspiran,
                            educan y transforman vidas.
                        </p>

                        {/* Search bar */}
                        <div className="mt-8 max-w-lg">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Buscar por título, autor o categoría..."
                                    className="w-full py-3 px-4 pr-10 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <div className="absolute right-3 top-3 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Book grid */}
                <div className="container mx-auto px-4 py-12">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
                        </div>
                    ) : filteredBooks.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-xl text-gray-600">No se encontraron libros que coincidan con tu búsqueda.</p>
                            <button
                                className="mt-4 px-4 py-2 bg-secondary text-white rounded-md"
                                onClick={() => setSearchTerm("")}
                            >
                                Limpiar búsqueda
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {filteredBooks.map((book) => (
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
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}