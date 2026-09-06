import { useState } from 'react'
import './App.css'

function App() {
  
  function handleSubmit(event) {
    event.preventDefault()
    
    const formData = new FormData(event.target)
    const submitUrl = "http://localhost:3000/submit-contact-us-form"

    fetch(submitUrl, {
      method: "POST",
      body: formData,
    })
    .then(response => {
      alert("Form submitted successfully!")
    });
  }

  return (
    <main className="app">
      <form className="contact-us-form" onSubmit={handleSubmit}>
        <label>first name</label>
        <input type="text" name="first_name" />

        <label>last name</label>
        <input type="text" name="last_name" />

        <label>age</label>
        <input type="number" name="age" />
        
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </main>
  )
}

export default App
