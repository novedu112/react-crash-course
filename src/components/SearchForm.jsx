import React, { useEffect, useRef, useState } from "react";

export const SearchForm = ({search, setSearch, handleSearch}) => {
  const inputRef = useRef(null);

  const onSearch = (e) => {
    e.preventDefault(); // Предотвращаем действие по умолчанию
    handleSearch(search); // Вызываем функцию поиска с текущим значением search
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Фокус на инпуте при монтировании компонента
    }
  }, []);

  return (
    <form onSubmit={onSearch} className="flex items-center space-x-2 p-4">
      <input
        type="text"
        name="search"
        ref={inputRef}
        onInput={(e) => setSearch(e.target.value)}
        placeholder="Search meals..."
        className="flex-grow p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Search
      </button>
    </form>
  );
};
