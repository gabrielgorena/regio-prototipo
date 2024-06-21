import React from 'react'
import { Link } from 'react-router-dom'

function PropertyCard({ property }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 text-airbnb-dark-gray">{property.title}</h3>
        <p className="text-airbnb-dark-gray text-base mb-2">Precio: ${property.price.toLocaleString()}</p>
        <p className="text-airbnb-dark-gray text-base mb-4">Ubicación: {property.location}</p>
        <Link 
          to={`/property/${property.id}`} 
          className="text-airbnb-red hover:text-airbnb-dark-red"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  )
}

export default PropertyCard