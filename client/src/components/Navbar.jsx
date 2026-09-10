import { Link } from 'react-router-dom'
function Navbar({title}) {
    return (
        <nav>
            <h2>{title}</h2>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/expenses">Expenses</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}

export default Navbar