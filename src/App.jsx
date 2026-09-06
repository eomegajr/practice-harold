import { useState } from 'react'
import './App.css'

function App() {
  
  const products = [
    { id: 1, name: "Product 1", image: "/public/images/product-1.jpg", description: "Description for Product 1" },
    { id: 2, name: "Product 2", image: "/public/images/product-2.jpg", description: "Description for Product 2" },
    { id: 3, name: "Product 3", image: "/public/images/product-3.png", description: "Description for Product 3" },
        { id: 1, name: "Product 1", image: "/public/images/product-1.jpg", description: "Description for Product 1" },
    { id: 2, name: "Product 2", image: "/public/images/product-2.jpg", description: "Description for Product 2" },
    { id: 3, name: "Product 3", image: "/public/images/product-3.png", description: "Description for Product 3" },
        { id: 1, name: "Product 1", image: "/public/images/product-1.jpg", description: "Description for Product 1" },
    { id: 2, name: "Product 2", image: "/public/images/product-2.jpg", description: "Description for Product 2" },
    { id: 3, name: "Product 3", image: "/public/images/product-3.png", description: "Description for Product 3" },
        { id: 1, name: "Product 1", image: "/public/images/product-1.jpg", description: "Description for Product 1" },
    { id: 2, name: "Product 2", image: "/public/images/product-2.jpg", description: "Description for Product 2" },
    { id: 3, name: "Product 3", image: "/public/images/product-3.png", description: "Description for Product 3" },
  ]


  return (
    <main className="app">
      <div className="top-navbar">
        {/* logo */}
        <div className="logo-container">
          <img src="/public/images/sample-cart.jpg" alt="Logo" />
        </div>
        
        {/* search bar */}
        <div className="search-bar-container">
          <input type="text" placeholder="Search products..." className="search-bar-input" />
        </div>
        
        {/* nav links */}
        <ul className="nav-links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about-us">About us</a>
          </li>
        </ul>
      </div>
      
      {/* products page */}
      
      <div className="products-page">
        <div className="products-lists">
          
          {/* item = id, name, image, description */}
          {products.map((item, index) => (
            <div className="products-item" key={index}>
              <img src={item.image} alt={item.name} />

              <div className="product-description">
                <h3>{item.name}</h3>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
