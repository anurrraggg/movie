import Movie_card from "./movie"

function home(){
    movie[] = [
        { id: 1, title: "The Shawshank Redemption", release: "1994" },
        { id: 2, title: "The Godfather", release: "1972" },
        { id: 3, title: "The Dark Knight", release: "2008" },
        { id: 4, title: "Pulp Fiction", release: "1994" },
        { id: 5, title: "The Lord of the Rings: The Fellowship of the Ring", release: "2001" },
    ]
    return (
        <div className="home">
            <div className="movies_grid">
                {movie.map (movie => <Movie_card key={movie.id} movie={movie} />  )}
            </div>
        </div>
    );
}