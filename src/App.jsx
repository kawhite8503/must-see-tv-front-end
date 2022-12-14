import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AddMovie from './pages/AddMovie/AddMovie'
import EditMovie from './pages/EditMovie/EditMovie'
import MovieList from './pages/MovieList/MovieList'
import * as movieService from './services/movieService'

const App = () => {
  const [movies, setMovies] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllMovies = async () => {
      const movieData = await movieService.getAll()
      setMovies(movieData)
    }
    fetchAllMovies()
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddMovie = async newMovieData => {
    const newMovie = await movieService.create(newMovieData)
    setMovies([...movies, newMovie])
    navigate('/')
  }

  const handleDeleteMovie = async id => {
    const deletedMovie = await movieService.deleteOne(id)
    setMovies(movies.filter(movie => movie._id !== deletedMovie._id))
  }

  const handleUpdateMovie = async updatedMovieData => {
    const updatedMovie = await movieService.update(updatedMovieData)
    const newMoviesArray = movies.map(movie => 
      movie._id === updatedMovie._id ? updatedMovie : movie)
      setMovies(newMoviesArray)
      navigate("/")
  }

  return (
    <>
    <div className='App'>
      <NavBar user={user} handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route
            path="/signup"
            element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
          />
          <Route
            path="/"
            element={<MovieList movies={movies} handleDeleteMovie={handleDeleteMovie} user={user}/>}
          />
          <Route
            path="/add"
            element={<AddMovie handleAddMovie={handleAddMovie} />}
          />
          <Route
            path="/edit"
            element={<EditMovie handleUpdateMovie={handleUpdateMovie} />}
          />
          <Route
            path="/login"
            element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
          />
          <Route
            path="/profiles"
            element={user ? <Profiles /> : <Navigate to="/login" />}
          />
          <Route
            path="/myMovies"
            element={<MovieList movies={movies} handleDeleteMovie={handleDeleteMovie} user={user}/>}
          />
          <Route
            path="/changePassword"
            element={
              user ? (
                <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </main>
    </div>
    </>
  )
}

export default App
