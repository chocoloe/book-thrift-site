import { React, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function AddBook(props) {
    const [addbooks, setAddBooks] = useState(props.books);

    const searchRef = useRef();
    const handleUpload = event => {
        const booksToBeAdd = event.target.value;
        setAddBooks(booksToBeAdd);
    }

    return (
        <div className="container-fluid">
            <div className="row align-items-center p-3">
                <div className="col-auto mb-4">
                    <Button onClick={handleUpload} type="submit" className="btn btn-secondary" active>Upload</Button>
                </div>
            </div>
        </div>
    );
}

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Book Storm</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;