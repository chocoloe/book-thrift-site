import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function NavBar({ books, setBooks }) {

    let navigate = useNavigate();

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log('sign out successfully!');
            navigate('/signin');
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to='/' className="icon-title">Book Storm</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-conter mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/home' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/addBook' className="nav-link">Add Book</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/signin' className="nav-link">Sign in</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link" onClick={handleSignOut}>Sign out</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;