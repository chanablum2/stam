import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
