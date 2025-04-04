# Proyecto_audiolibro

# Proyecto libros
## 📌 Descripción  
Esta aplicación permite buscar libros utilizando una API externa (como Google Books API o Open Library).  
Está compuesta por dos partes principales:  
- *Frontend: Desarrollado en **Remix* (React-based framework).  
- *Backend: Desarrollado en *.NET** (API REST).  

## 🛠 Tecnologías  
- *Frontend*:  
  - Remix (React, TypeScript)  
  - Tailwind CSS (opcional para estilos)  
  - Axios/Fetch para consumo de API  
- *Backend*:  
  - .NET 6+ (o .NET Core)  
  - C#  
  - Entity Framework (si usa base de datos)  
  - Swagger/OpenAPI (documentación)  

## 🔌 API Externa  
La aplicación consume datos de una API de libros como:  
- [Google Books API](https://developers.google.com/books)  
- [Open Library API](https://openlibrary.org/developers/api)  

## 📂 Estructura del Proyecto  
  
/book-search-app  
│  
├── /frontend-remix       # Frontend en Remix  
│   ├── /app  
│   ├── /public  
│   └── package.json  
│  
├── /backend-dotnet      # Backend en .NET  
│   ├── /Controllers  
│   ├── /Models  
│   └── BookSearchAPI.csproj  
│  
└── README.md  
  

## 🚀 Instalación y Ejecución  

### Frontend (Remix)  
1. Entrar en la carpeta:  
   bash  
   cd frontend-remix  
     
2. Instalar dependencias:  
   bash  
   npm install  
     
3. Ejecutar:  
   bash  
   npm run dev  
     
4. Abrir en el navegador:  
     
   http://localhost:3000  
     

### Backend (.NET)  
1. Entrar en la carpeta:  
   bash  
   cd backend-dotnet  
     
2. Restaurar paquetes NuGet:  
   bash  
   dotnet restore  
     
3. Ejecutar:  
   bash  
   dotnet run  
     
4. La API estará disponible en:  
     
   http://localhost:5000 (o puerto configurado)  
     

## 🌟 Características  
- Búsqueda de libros por título, autor o ISBN.  
- Visualización de resultados en tarjetas.  
- Posibilidad de guardar favoritos (si hay base de datos).  

## 📄 Endpoints del Backend (Ejemplo)  
- GET /api/books?query={searchTerm} – Buscar libros.  
- GET /api/books/{id} – Obtener detalles de un libro.  

## 🤝 Contribuciones  
¡Las contribuciones son bienvenidas! Haz un fork, crea una rama y envía un PR.  

## 📜 Licencia  
MIT  

---  
✨ *Happy Coding!*## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


## 🚀 About Me
I'm a full stack developer...


## Tech Stack

*Client:* React, Redux, TailwindCSS

*Server:* Node, Express