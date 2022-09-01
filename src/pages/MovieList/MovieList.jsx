import styles from './MovieList.module.css'
import MovieCard from '../../components/MovieCard/MovieCard';

const MovieList = (props) => {
  const movieIds = [1025,1012,1062,1084,169,200,219,237,244,275,40,433,577,582,593,611,659,718,783,790,824,837,881,937,943]
  return (
    <>
    <h1>Watch List</h1>
      <div className={styles.container}>
        {props.movies.map(movie => 
          <MovieCard 
          movie={movie} 
          key={movie._id}
          randMovieImgId={movieIds[Math.floor(Math.random()*(movieIds.length))]}
          />
        )}
      </div>
    </>
  )
}

export default MovieList;