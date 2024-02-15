import { Link } from 'react-router-dom'
import { signOut } from "firebase/auth"

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Users</h1>
                </Link>
                <nav>
                    <div>
                        <button onClick={ () => signOut() }>Log Out</button>
                </div>
                <div>
                    <Link to="/login">
                        Login
                    </Link>
                    <Link to="/signup" style={{margin:10}}>
                        Sign Up
                    </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar