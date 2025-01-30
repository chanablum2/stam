import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

const Home = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data)
      })
      .catch((error) => console.error("Error fetching movies:", error))
  }, [])

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">🎬 רשימת הסרטים</h1>

      {/* שדה חיפוש */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 חפש סרט..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* רשימת הסרטים */}
      <div className="row">
        {filteredMovies.length === 0 ? (
          <p className="text-center">❌ לא נמצאו סרטים.</p>
        ) : (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card-body text-center">
                <h2 className="card-title">{movie.title}</h2>
              </div>

              <Link to={`/movie/${movie.id}`} className="text-decoration-none">
                <div className="card shadow-sm h-100">
                  <img
                    src={movie.poster}
                    className="card-img-top"
                    alt={movie.title}
                  />
                </div>
              </Link>
              <div className="card-body text-center">
                <h5 className="card-title">{movie.description}</h5>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Home
