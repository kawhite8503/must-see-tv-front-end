import styles from './MovieCard.module.css'


const MovieCard = ({movie, randMovieImgId}) => {

  return(
    <div className={styles.card}>
      <img 
        src={`https://picsum.photos/id/${randMovieImgId}/640/480`} 
        alt="Let's go to the movies!"
        className="card-img-top" 
      />
      <div className="card-body">
        <h2 className="card-text">{movie.name}</h2>
        <div key={movie._id} >
            <p>Movie Title: {movie.name}</p>
            <p>Description: {movie.description}</p>
            <p>Streaming From: {movie.streaming}</p>
            <p>{movie.watched? 'Seen' : 'Not seen yet!'}</p>
            <p>Recommended by: {movie.owner?.name}</p>
          </div>
      </div>
    </div>
)}

export default MovieCard;