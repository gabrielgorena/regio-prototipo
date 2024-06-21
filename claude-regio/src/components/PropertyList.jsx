import React, { useState } from 'react'
import PropertyCard from './PropertyCard'
import SearchForm from './SearchForm'

function PropertyList() {
    const initialProperties = [
        {
            id: 1,
            title: 'Casa moderna',
            price: 200000,
            location: 'Ciudad A',
            description: 'Hermosa casa moderna con amplios espacios y mucha luz natural.',
            features: ['3 habitaciones', '2 baños', 'Jardín', 'Garaje'],
            contact: 'agente1@regio.com'
        },
        {
            id: 2,
            title: 'Apartamento céntrico',
            price: 150000,
            location: 'Ciudad B',
            description: 'Apartamento en el corazón de la ciudad, cerca de todas las comodidades.',
            features: ['2 habitaciones', '1 baño', 'Balcón', 'Ascensor'],
            contact: 'agente2@regio.com'
        },
        {
            id: 3,
            title: 'Chalet con jardín',
            price: 300000,
            location: 'Ciudad C',
            description: 'Espacioso chalet con gran jardín, perfecto para familias.',
            features: ['4 habitaciones', '3 baños', 'Piscina', 'Terraza'],
            contact: 'agente3@regio.com'
        },
    ]

    const [properties, setProperties] = useState(initialProperties)

    const handleSearch = (searchTerm) => {
        const filteredProperties = initialProperties.filter(
            property =>
                property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                property.location.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setProperties(filteredProperties)
    }

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Propiedades Disponibles</h2>
            <SearchForm onSearch={handleSearch} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    )
}

export default PropertyList