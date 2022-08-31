import './App.css'
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AddMovie from './pages/AddMovie/AddMovie'
import * as movieService from './services/movieService'

const App = () => {
  const [movies, setMovies] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddMovie = newMovieData => {
    const newMovie = await movieService.create(newMovieData)
    setMovies([...movies, newMovie])
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
            path="/add"
            element={<AddMovie handleAddMovie={handleAddMovie} />}
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
