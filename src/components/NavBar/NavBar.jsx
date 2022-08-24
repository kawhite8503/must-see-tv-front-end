import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    <header>
      Must See TV!
      {user ?
        <nav>
          <ul>
            <li><Link to="/myMovies">{user.name}'s Watch List</Link></li>
            <li><Link to="/profiles">Entire Audience</Link></li>
            <li><Link to="/add">Add To Watch List</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </header>
    </>
  )
}

export default NavBar
