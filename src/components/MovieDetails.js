import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function MovieDetails() {
  const { id } = useParams(); // מזהה הסרט מה-URL
  const navigate = useNavigate(); // נווט חזרה
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movie)
    return <div className="text-center mt-5">📽 טוען את פרטי הסרט...</div>;

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <div className="row">
          {/* תמונת הסרט */}
          <div className="col-md-4 text-center">
            <img
              src={movie.poster}
              alt={movie.title}
              className="img-fluid rounded shadow"
            />
          </div>

          {/* פרטי הסרט */}
          <div className="col-md-8">
            <h2 className="text-primary">{movie.title}</h2>
            <p className="text-muted">{movie.description}</p>

            {/* לינק לטריילר */}
            <div className="mt-3">
              <a
                href={movie.trailer}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger"
              >
                🎬 צפייה בטריילר
              </a>
            </div>

            {/* כפתור חזרה לעמוד הראשי */}
            <button
              className="btn btn-secondary mt-4"
              onClick={() => navigate("/")}
            >
              ⬅ חזרה לרשימת הסרטים
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
