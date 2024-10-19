import React from 'react';
import './NavBar.css';
import logo from '../assets/logo.png'; // Adjust the path based on where your logo is located

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src={logo} alt="" className="logo" /> {/* Logo image */}
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/theory">Lessons</a></li>
                    <li className="dropdown">
                        <a href="/rhythm-practice">Practice</a>
                        <div className="dropdown-content">
                            <a href="/scale-exercises">Exercises</a>
                            <a href="/absolute-pitch">Quizzes</a>
                        </div>
                    </li>
                    <li><a href="/about">About</a></li>
                </ul>
                <div className="search-container">
                    <input type="text" placeholder="Search..." className="search-input" aria-label="Search" />
                    <button className="search-button">Search</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
