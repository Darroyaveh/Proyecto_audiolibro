import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button"; 
import { useState, useEffect } from "react";
import { Book, getBooks } from "../services/bookService";

export default function BookSlider() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const fetchedBooks = await getBooks();
        setBooks(fetchedBooks.slice(0,6));
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <Carousel 
      opts={{ align: "start" }} 
      className="w-full max-w-full mx-auto"
    >
      <CarouselContent>
        {books.map((book, index) => {
          console.log(book); // Muestra el valor de "book" en cada iteración
          return (
            <CarouselItem key={book.id || index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div>
                      <h3 className="text-xl font-semibold">{book.title}</h3>
                      <img
                        src={book.bookCover}
                        alt={book.title}
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <p className="text-sm text-gray-500">{book.author}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
