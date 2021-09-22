import { Link } from "react-router-dom";
const Movie = ({ Poster, Title, imdbID }) => {
  return (
    <Link to={`/MovieDetail/${imdbID}`} className="Link-style">
      <div className="movie">
        <img src={Poster} alt={Title}></img>
        <h3>{Title}</h3>
      </div>
    </Link>
  );
};

export default Movie;
