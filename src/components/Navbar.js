import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg shadow-sm">
            <Link className="navbar-brand ml-lg-4" to="/">Simple Food</Link>
            <div className="navbar-toggler">
                <span className="navbar-toggler-icon">
                    <i className="fas fa-bars" style={{fontSize: "1.7rem"}}></i>
                </span>
            </div>
            <div className="collapse navbar-collapse" id="collapseMenu">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Tips</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Lifestyle</a>
                    </li>
                    <li className="nav-item">
                        <a href="#popular-recipes" className="nav-link">Recipes</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
