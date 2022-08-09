import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ books, setBooks }) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <h1>Book Storm</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-conter mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/home' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/addBook' className="nav-link">Add Book</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;