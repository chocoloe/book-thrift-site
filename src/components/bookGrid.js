import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export function BookGrid({ books }) {

    let bookArray = books.map(book => <BookCard key={book.timestamp} book={book} />)
    return (
        <div className="container">
            <div className="row">
                { bookArray }
            </div>
        </div>
    );
}

export function BookCard({ book }) {
    return (
        <div className='col col-12 col-md-6 col-xl-3 d-flex'>
            <Card className='bookcard'>
                <Card.Img className="card-img-top book-card-img" src={book.img} alt={book.name} />
                <Card.Body>
                    <Card.Title className='cardTitle'>{book.bookName}</Card.Title>
                    <div className='cardtext'>
                        <ul>
                            <li className="card-text">{`Course: ${book.course}`}</li>
                            <li className="card-text">{`Condition: ${book.condition}`}</li>
                            <li className="card-text">{`Price: ${book.price}`}</li>
                        </ul>
                        <Link to='/detail' state={{ book: book }}>More Details</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}