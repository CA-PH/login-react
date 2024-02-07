import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>User Management</h1>
                </Link>
                <div>
                    <Link to="/login">
                        <h1>Login</h1>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar