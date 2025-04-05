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
    return [{
        id: 1,
        title: "Lecturas para todos los días",
        description: "Una colección de historias cotidianas que inspiran y entretienen a lectores de todas las edades.",
        bookCover: "/img/Lecturas-para-todos-los-dias.png",
        author: "Autor Anónimo",
        year: 2005,
        pages: 120,
        category: "Cuentos infantiles"
    },
    {
        id: 2,
        title: "La casa y el campo",
        description: "Explora la belleza de la vida rural y los secretos que esconden las casas de campo.",
        bookCover: "/img/La-casa-y-el-campo.png",
        author: "María López",
        year: 2010,
        pages: 150,
        category: "Naturaleza"
    },
    {
        id: 3,
        title: "Historias y lugares",
        description: "Viaja a través de diferentes culturas y épocas con estas fascinantes historias.",
        bookCover: "/img/Historias-y-lugares.png",
        author: "Carlos Méndez",
        year: 2012,
        pages: 180,
        category: "Aventura"
    },
    {
        id: 4,
        title: "El hombre y su cultura",
        description: "Un estudio profundo sobre la relación entre el ser humano y sus tradiciones.",
        bookCover: "/img/El-hombre-y-su-cultura.png",
        author: "Ana Torres",
        year: 2008,
        pages: 210,
        category: "Antropología"
    },
    {
        id: 5,
        title: "Cuentos y pasatiempos",
        description: "Diviértete con estos cuentos cortos acompañados de juegos y actividades.",
        bookCover: "/img/Cuentos-y-pasatiempos.png",
        author: "Juan Pérez",
        year: 2015,
        pages: 90,
        category: "Infantil"
    },
    {
        id: 6,
        title: "Planeta vivo",
        description: "Descubre los misterios de nuestro planeta y la importancia de cuidarlo.",
        bookCover: "/img/Planeta-vivo.png",
        author: "Laura Gómez",
        year: 2019,
        pages: 160,
        category: "Ecología"
    },
    {
        id: 7,
        title: "Calor de hogar",
        description: "Historias que celebran el amor familiar y la comodidad del hogar.",
        bookCover: "/img/Calor-de-hogar.png",
        author: "Sofía Ramírez",
        year: 2017,
        pages: 130,
        category: "Familiar"
    },
    {
        id: 8,
        title: "Lecturas fantásticas",
        description: "Sumérgete en mundos imaginarios llenos de magia y creatividad.",
        bookCover: "/img/Lecturas-fantasticas.png",
        author: "Diego Sánchez",
        year: 2014,
        pages: 200,
        category: "Fantasía"
    },
    {
        id: 9,
        title: "Los primeros años",
        description: "Un libro pensado para los más pequeños, con ilustraciones y textos sencillos.",
        bookCover: "/img/Los-primeros-anos.png",
        author: "Elena Castro",
        year: 2020,
        pages: 60,
        category: "Primera infancia"
    },
    {
        id: 10,
        title: "Tiempo de hacer",
        description: "Aprende a aprovechar tu tiempo con estos consejos y actividades prácticas.",
        bookCover: "/img/Tiempo-de-hacer.png",
        author: "Pedro Vargas",
        year: 2018,
        pages: 140,
        category: "Autoayuda"
    },
    {
        id: 11,
        title: "Cuentos para contar",
        description: "Ideales para leer en voz alta y compartir en familia o en el aula.",
        bookCover: "/img/Cuentos-para-contar.png",
        author: "Isabel Fernández",
        year: 2016,
        pages: 110,
        category: "Cuentos"
    },
    {
        id: 12,
        title: "Tan distintos y parientes",
        description: "Explora las diferencias y similitudes entre las especies animales.",
        bookCover: "/img/Tan-distintos-y-parientes.png",
        author: "Ricardo Mora",
        year: 2013,
        pages: 170,
        category: "Ciencia"
    },
    {
        id: 13,
        title: "La finca viva",
        description: "Una guía para entender y disfrutar de la vida en una finca autosustentable.",
        bookCover: "/img/La-finca-viva.png",
        author: "Gabriel Ruiz",
        year: 2011,
        pages: 190,
        category: "Agricultura"
    },
    {
        id: 14,
        title: "Los secretos de las plantas",
        description: "Descubre el fascinante mundo de la botánica y sus aplicaciones prácticas.",
        bookCover: "/img/Los-secretos-de-las-plantas.png",
        author: "Claudia Herrera",
        year: 2021,
        pages: 155,
        category: "Naturaleza"
    },
    {
        id: 15,
        title: "Del campo a la mesa",
        description: "Recetas tradicionales con ingredientes directamente cosechados.",
        bookCover: "/img/Del-campo-a-la-mesa.png",
        author: "Marta Jiménez",
        year: 2020,
        pages: 175,
        category: "Cocina"
    },
    {
        id: 16,
        title: "A que te cojo ratón",
        description: "Divertidas historias sobre animales y sus travesuras.",
        bookCover: "/img/A-que-te-cojo-raton.png",
        author: "Luis Rojas",
        year: 2015,
        pages: 85,
        category: "Infantil"
    },
    {
        id: 17,
        title: "Los viajes del viejo Jacobo",
        description: "Acompaña a Jacobo en sus increíbles aventuras alrededor del mundo.",
        bookCover: "/img/Los-viajes-del-viejo-Jacobo.png",
        author: "Fernando Navarro",
        year: 2009,
        pages: 220,
        category: "Aventura"
    },
    {
        id: 18,
        title: "Cuentos maravillosos",
        description: "Relatos llenos de fantasía y enseñanzas para todas las edades.",
        bookCover: "/img/Cuentos-maravillosos.png",
        author: "Silvia Mendoza",
        year: 2014,
        pages: 135,
        category: "Fantasía"
    },
    {
        id: 19,
        title: "Los Secretos de los animales",
        description: "Curiosidades y datos sorprendentes sobre el reino animal.",
        bookCover: "/img/Los-Secretos-de-los-animales.png",
        author: "Roberto Guzmán",
        year: 2017,
        pages: 165,
        category: "Ciencia"
    },
    {
        id: 20,
        title: "La tierra el cielo y más allá",
        description: "Una introducción a la astronomía para jóvenes lectores.",
        bookCover: "/img/La-tierra-el-cielo-y-mas-alla.png",
        author: "Patricia Soto",
        year: 2018,
        pages: 145,
        category: "Ciencia"
    },
    {
        id: 21,
        title: "Más claro no canta un gallo",
        description: "Refranes y dichos populares explicados para niños.",
        bookCover: "/img/Mas-claro-no-canta-un-gallo.png",
        author: "Jorge Medina",
        year: 2016,
        pages: 95,
        category: "Lenguaje"
    },
    {
        id: 22,
        title: "Cuentos para desenredar enredos",
        description: "Historias que enseñan a resolver problemas de manera creativa.",
        bookCover: "/img/Cuentos-para-desenredar-enredos.png",
        author: "Lucía Reyes",
        year: 2019,
        pages: 125,
        category: "Educativo"
    },
    {
        id: 23,
        title: "Todo lo contrario",
        description: "Un libro sobre opuestos y contrastes en la vida cotidiana.",
        bookCover: "/img/Todo-lo-contrarios.png",
        author: "Andrés Castillo",
        year: 2020,
        pages: 70,
        category: "Infantil"
    },
    {
        id: 24,
        title: "Con los pelos de punta",
        description: "Relatos de misterio y terror suave para valientes lectores.",
        bookCover: "/img/Con-los-pelos-de-punta.png",
        author: "Raquel Ortega",
        year: 2013,
        pages: 115,
        category: "Terror"
    },
    {
        id: 25,
        title: "Salud para contar",
        description: "Consejos y hábitos saludables presentados de forma amena.",
        bookCover: "/img/Salud-para-contar.png",
        author: "Dr. Manuel Vega",
        year: 2021,
        pages: 155,
        category: "Salud"
    },
    {
        id: 26,
        title: "Érase una vez",
        description: "Los cuentos clásicos de siempre, recontados para una nueva generación.",
        bookCover: "/img/Erase-una-vez.png",
        author: "Varios Autores",
        year: 2012,
        pages: 160,
        category: "Clásicos"
    },
    {
        id: 27,
        title: "Entre cuento y cuento",
        description: "Pequeñas historias que suceden en los espacios entre los grandes relatos.",
        bookCover: "/img/Entre-cuento-y-cuento.png",
        author: "Daniela Montes",
        year: 2017,
        pages: 105,
        category: "Cuentos"
    }
    ]
}

// Function to get a single book by ID
export function getBookById(id: number): Book | undefined {
    const books = getBooks();
    return books.find(book => book.id === id);
}
