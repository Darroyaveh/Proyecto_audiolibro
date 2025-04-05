import { useEffect, useState } from "react";
import { getBooks, type Book } from "~/services/bookService";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import SearchBar from "~/components/SearchBar";
import BookGrid from "~/components/BookGrid";

export default function Books() {
    const [books, setBooks] = useState<Book[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

    useEffect(() => {
        let mounted = true;
        
        const loadBooks = async () => {
            setIsLoading(true);
            try {
                // In a real app, this would be an API call
                const fetchedBooks = await getBooks();
                if (mounted) {
                    setBooks(fetchedBooks);
                    setFilteredBooks(fetchedBooks);
                }
            } catch (error) {
                console.error("Error loading books:", error);
            } finally {
                if (mounted) {
                    setIsLoading(false);
                }
            }
        };

        loadBooks();
        
        // Cleanup function to prevent state updates after unmount
        return () => {
            mounted = false;
        };
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

                        {/* Search Component */}
                        <SearchBar 
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                    </div>
                </div>

                {/* Book Grid Component */}
                <div className="container mx-auto px-4 py-12">
                    <BookGrid 
                        books={filteredBooks}
                        isLoading={isLoading}
                        booksPerPage={12}
                    />
                </div>
            </main>

            <Footer />
        </div>
    );
}