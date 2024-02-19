import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
    const { user, logout } = UserAuth();

    const handleLogout = async () => {
        await logout();
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Users</h1>
                </Link>
                <nav>
                {user && 
                <div>
                    <div>Welcome {user.email}</div>
                    <button onClick={handleLogout}>Log Out</button>
                </div>
                }
                {!user && 
                <div>
                    <Link to="/login">
                        Login
                    </Link>
                    <Link to="/signup" style={{margin:10}}>
                        Sign Up
                    </Link>
                </div>
                }
                </nav>
            </div>
        </header>
    )
}

export default Navbar