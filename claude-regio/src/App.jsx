import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import PropertyList from './components/PropertyList'
import PropertyDetails from './components/PropertyDetails'

function App() {
  return (
    <Router>
      <div className="bg-airbnb-light-gray min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<PropertyList />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </main>
        <footer className="bg-white py-6 text-center text-airbnb-dark-gray">
          <p>&copy; 2024 Regio. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
