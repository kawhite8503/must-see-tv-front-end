import styles from './MovieList.module.css'
import MovieCard from '../../components/MovieCard/MovieCard';

const MovieList = (props) => {

  return (
    <>
    <h1>Watch List</h1>
      <div className={styles.container}>
        {props.movies.map(movie => 
          <MovieCard 
          movie={movie} 
          key={movie._id}
          handleDeleteMovie={props.handleDeleteMovie}
          user={props.user}
          />
        )}
      </div>
    </>
  )
}

export default MovieList;