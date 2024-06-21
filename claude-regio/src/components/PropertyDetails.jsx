import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function PropertyDetails() {
  const [property, setProperty] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    // Aquí simularemos una llamada a una API
    const fetchProperty = () => {
      // Esta es una simulación. En una app real, aquí harías una llamada a tu API
      const mockProperties = [
        { 
          id: '1', 
          title: 'Casa moderna', 
          price: 200000, 
          location: 'Ciudad A',
          description: 'Hermosa casa moderna con amplios espacios y mucha luz natural.',
          features: ['3 habitaciones', '2 baños', 'Jardín', 'Garaje'],
          contact: 'agente1@regio.com'
        },
        { 
          id: '2', 
          title: 'Apartamento céntrico', 
          price: 150000, 
          location: 'Ciudad B',
          description: 'Apartamento en el corazón de la ciudad, cerca de todas las comodidades.',
          features: ['2 habitaciones', '1 baño', 'Balcón', 'Ascensor'],
          contact: 'agente2@regio.com'
        },
        { 
          id: '3', 
          title: 'Chalet con jardín', 
          price: 300000, 
          location: 'Ciudad C',
          description: 'Espacioso chalet con gran jardín, perfecto para familias.',
          features: ['4 habitaciones', '3 baños', 'Piscina', 'Terraza'],
          contact: 'agente3@regio.com'
        },
      ]

      const foundProperty = mockProperties.find(p => p.id === id)
      setProperty(foundProperty)
    }

    fetchProperty()
  }, [id])

  if (!property) return <div className="text-center py-10">Cargando...</div>

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-airbnb-dark-gray mb-4">{property.title}</h2>
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
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails