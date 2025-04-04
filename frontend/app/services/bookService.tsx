export interface Book {
    id: number;
    title: string;
    description: string;
    bookCover: string;
    author: string;
    year: number;
    pages: number;
    category: string;
}

// This function simulates fetching books from an API
export function getBooks(): Book[] {
    return [
        {
            id: 1,
            title: "El Alquimista",
            description: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined.",
            bookCover: "/img/books/alquimista.jpg",
            author: "Paulo Coelho",
            year: 1988,
            pages: 208,
            category: "Fiction"
        },
        {
            id: 2,
            title: "Cien Años de Soledad",
            description: "The brilliant, bestselling, landmark novel that tells the story of the Buendia family, and chronicles the irreconcilable conflict between the desire for solitude and the need for love.",
            bookCover: "/img/books/cien-anos.jpg",
            author: "Gabriel García Márquez",
            year: 1967,
            pages: 417,
            category: "Literary Fiction"
        },
        {
            id: 3,
            title: "El Principito",
            description: "A pilot stranded in the desert awakes one morning to see, standing before him, a most extraordinary little fellow. Thus begins this wise and enchanting fable that, in teaching the secret of what is really important in life.",
            bookCover: "/img/books/principito.jpg",
            author: "Antoine de Saint-Exupéry",
            year: 1943,
            pages: 96,
            category: "Children's Literature"
        },
        {
            id: 4,
            title: "Don Quijote de la Mancha",
            description: "Widely regarded as the world's first modern novel, this magnificent epic features the famous gentleman-turned-knight-errant whose exploits made him one of literature's most enduring characters.",
            bookCover: "/img/books/quijote.jpg",
            author: "Miguel de Cervantes",
            year: 1605,
            pages: 863,
            category: "Classic"
        },
        {
            id: 5,
            title: "Pedro Páramo",
            description: "A masterpiece of the surreal and the poetic, this novel is a stunning portrait of a collapsing community and the tyrannical patriarch who rules it from beyond the grave.",
            bookCover: "/img/books/pedro-paramo.jpg",
            author: "Juan Rulfo",
            year: 1955,
            pages: 124,
            category: "Latin American Literature"
        },
        {
            id: 6,
            title: "Rayuela",
            description: "Horacio Oliveira is an Argentinian writer who lives in Paris with his mistress, La Maga, surrounded by a loose-knit circle of bohemian friends who call themselves 'the Club.'",
            bookCover: "/img/books/rayuela.jpg",
            author: "Julio Cortázar",
            year: 1963,
            pages: 576,
            category: "Experimental Fiction"
        }
    ];
}

// Function to get a single book by ID
export function getBookById(id: number): Book | undefined {
    const books = getBooks();
    return books.find(book => book.id === id);
}