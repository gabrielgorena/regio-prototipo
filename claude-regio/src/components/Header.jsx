import React from 'react'

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-airbnb-red text-3xl font-bold">Regio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-airbnb-dark-gray hover:text-airbnb-red">Inicio</a></li>
            <li><a href="#" className="text-airbnb-dark-gray hover:text-airbnb-red">Propiedades</a></li>
            <li><a href="#" className="text-airbnb-dark-gray hover:text-airbnb-red">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header