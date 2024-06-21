import React, { useState } from 'react'
import PropertyCard from './PropertyCard'
import SearchForm from './SearchForm'
import { propertiesData } from './propertiesData'

function PropertyList() {

    const [properties, setProperties] = useState(propertiesData)

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