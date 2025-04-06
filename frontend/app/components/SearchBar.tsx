import React from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mt-8 max-w-lg mx-auto"> {/* Añadido mx-auto para centrar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar por título o autor"
          className="w-full py-3 px-4 pr-10 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-secondary" // Añadido bg-white para el fondo blanco
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
  );
};

export default SearchBar;

