import { useParams, Link, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getBookById, type Book } from "~/services/bookService";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export default function BookDetails() {
    const params = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState<Book | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBook = () => {
            setIsLoading(true);
            
            try {
                const bookId = parseInt(params.id || "0");
                if (isNaN(bookId)) {
                    throw new Error("ID de libro inválido");
                }

                const foundBook = getBookById(bookId);
                
                if (!foundBook) {
                    throw new Error("Libro no encontrado");
                }

                setBook(foundBook);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Error desconocido");
                setBook(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBook();
    }, [params.id]);

    if (isLoading) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow flex items-center justify-center bg-gray-50">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
                </main>
                <Footer />
            </div>
        );
    }

    if (error || !book) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow flex flex-col items-center justify-center bg-gray-50 p-4">
                    <div className="text-center max-w-lg">
                        <h1 className="text-3xl font-bold text-primary mb-4">Oops!</h1>
                        <p className="text-xl text-gray-700 mb-6">{error || "Libro no encontrado"}</p>
                        <button 
                            onClick={() => navigate("/books")}
                            className="px-6 py-3 bg-secondary text-white rounded-md hover:bg-opacity-90 transition-all"
                        >
                            Volver a la biblioteca
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            <main className="flex-grow bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <div className="mb-8">
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <Link to="/home" className="text-gray-700 hover:text-secondary">
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <span className="mx-2 text-gray-400">/</span>
                                        <Link to="/books" className="text-gray-700 hover:text-secondary">
                                            Libros
                                        </Link>
                                    </div>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <span className="mx-2 text-gray-400">/</span>
                                        <span className="text-gray-500">{book.title}</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>

                    {/* Book Details */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/3 p-6 flex justify-center">
                                <div className="relative w-full max-w-sm">
                                    <div className="aspect-[2/3] relative">
                                        <img 
                                            src={book.bookCover || '/img/book-placeholder.jpg'}
                                            alt={book.title}
                                            className="w-full h-full object-cover rounded-lg shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/3 p-6 md:p-8">
                                <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full mb-4">
                                    {book.category}
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{book.title}</h1>
                                <p className="text-xl text-primary mb-6">por {book.author}</p>
                                
                                <div className="mb-8">
                                    <p className="text-gray-700 leading-relaxed mb-4">{book.description}</p>
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                                    <div>
                                        <p className="text-gray-500 text-sm">Publicado en</p>
                                        <p className="font-semibold">{book.year}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">Páginas</p>
                                        <p className="font-semibold">{book.pages}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">Categoría</p>
                                        <p className="font-semibold">{book.category}</p>
                                    </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-4">
                                    <button className="px-6 py-3 bg-secondary text-white rounded-md hover:bg-opacity-90 transition-all">
                                        Ver PDF
                                    </button>
                                    <button className="px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all">
                                        Solicitar físico
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
}