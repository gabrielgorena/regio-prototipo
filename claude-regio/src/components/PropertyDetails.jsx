import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { propertiesData } from './propertiesData'

function PropertyDetails() {
  const [property, setProperty] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchProperty = () => {
      const foundProperty = propertiesData.find(p => p.id === id)
      setProperty(foundProperty)
    }

    fetchProperty()
  }, [id])

  if (!property) return <div className="text-center py-10">Cargando...</div>

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-airbnb-dark-gray mb-4">{property.title}</h2>
        <img src={property.image} alt="Casa Quintanilla" style={{ width: '300px', height: 'auto' }} />
        <p className="text-2xl text-airbnb-red mb-4">${property.price.toLocaleString()}</p>
        <p className="text-xl text-airbnb-dark-gray mb-4">{property.location}</p>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-airbnb-dark-gray mb-2">Descripción</h3>
          <p className="text-airbnb-dark-gray">{property.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-airbnb-dark-gray mb-2">Características</h3>
            <ul className="list-disc list-inside text-airbnb-dark-gray">
              {property.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-airbnb-dark-gray mb-2">Contacto</h3>
            <p className="text-airbnb-dark-gray">{property.contact}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-airbnb-dark-gray mb-2">Tipo</h3>
            <p className="text-airbnb-dark-gray">{property.type}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails