function Movie({movie}){
    function onfavclick(){
        return(alert('Added to Favorites') );
    }
    return <div className="Movie_card">
        <div className="movie_poster">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie_overlay"></div>
            <button className="movie_button" onClick={onfavclick}></button>
        </div>
<div className="movie_title">
    <h></h>
    </div>"
    </div>

}
export default Movie;