function Movie({ movie }) {
    function onfavclick() {
        alert('Added to Favorites');
    }

    return (
        <div className="Movie_container">
            <div className="Movie_card">
                <div className="movie_poster">
                    <img src={movie.url} alt={movie.title} />
                    <div className="movie_overlay"></div>
                    <button className="movie_button" onClick={onfavclick}>👍</button>
                </div>
            </div>
            <div className="Movie_title">
                <h3>{movie.title}</h3>
                <h3>{movie.release}</h3>
            </div>
        </div>
    );
}

export default Movie;
