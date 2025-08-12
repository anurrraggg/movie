import MovieCard from "../components/MovieCard";
import { useState } from "react";
import './Home.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "The Shawshank Redemption", release: "1994" },
    { id: 2, title: "The Godfather", release: "1972" },
    { id: 3, title: "The Dark Knight", release: "2008" },
    { id: 4, title: "Pulp Fiction", release: "1994" },
    { id: 5, title: "The Lord of the Rings", release: "2001" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search_form">
        <input
          type="text"
          placeholder="🔍 Search the movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="movies_grid">
        {movies
          .filter(movie =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
      </div>
    </div>
  );
}

export default Home;
