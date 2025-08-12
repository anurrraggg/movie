function MovieCard({ movie }) {
  return (
    <div className="movie_card">
      <div className="movie_thumbnail">🎞</div>
      <div className="movie_info">
        <h3>{movie.title}</h3>
        <p>{movie.release}</p>
        <button className="add_fav_btn">❤️ Add to Favorites</button>
      </div>
    </div>
  );
}

export default MovieCard;
