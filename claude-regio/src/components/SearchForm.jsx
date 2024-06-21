import React, { useState } from 'react'

function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex">
        <input
          type="text"
          placeholder="Buscar propiedades..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-airbnb-red"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-airbnb-red text-white rounded-r-md hover:bg-airbnb-dark-red focus:outline-none focus:ring-2 focus:ring-airbnb-red"
        >
          Buscar
        </button>
      </div>
    </form>
  )
}

export default SearchForm