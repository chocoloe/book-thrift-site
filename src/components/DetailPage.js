import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function DetailPage() {
    const location = useLocation();
    const { book } = location.state;
    return (
        <>
            <div className="container-fluid">
                <div className="row pt-4">
                    <div className="col-auto">
                        <p>{book.bookName}</p>
                        <p>{book.course}</p>
                        <p>{book.price}</p>
                    </div>
                </div>
                <Link to='/home'>Go Back</Link>
            </div>
        </>
    );
}