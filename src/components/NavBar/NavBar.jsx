import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    <header className='navHeader'>
      Must See TV!
      {user ?
        <nav className='appNav'>
          <Link to="/myMovies">{user.name}'s Watch List</Link>
          <Link to="/profiles">Entire Audience</Link>
          <Link to="/add">Add To Watch List</Link>
          <Link to="" onClick={handleLogout}>LOG OUT</Link>
          <Link to="/changePassword">Change Password</Link>
        </nav>
      :
        <nav>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      }
    </header>
    </>
  )
}

export default NavBar
