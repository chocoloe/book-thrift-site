import { React, useState } from 'react';
import NavBar from './NavBar';
import { useLocation, Link } from 'react-router-dom';

export default function DetailPage() {
    const location = useLocation();
    const { book } = location.state;
    return (
        <>
            <NavBar />
            <div className="container-fluid">
                <div className="row pt-4">
                    <div className="col-auto">
                        <p>{book.name}</p>
                        <p>{book.course}</p>
                        <p>{book.price}</p>
                    </div>
                </div>
                <Link to='/'>Go Back</Link>
            </div>
        </>
    );
}