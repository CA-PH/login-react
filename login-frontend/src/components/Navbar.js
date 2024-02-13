import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Users</h1>
                </Link>
                <div>
                    <Link to="/login">
                        Login
                    </Link>

                    <Link to="/signup" style={{margin:10}}>
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar