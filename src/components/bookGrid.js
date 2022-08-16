import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export function BookGrid({ books }) {

    let bookArray = books.map(book => <BookCard key={book.name} book={book} />)
    return (
        <div className="container">
            <div className="row">
                { bookArray }
            </div>
        </div>
    );
}

export function BookCard({ book }) {
    // return(
    //     <div className="col col-12 col-md-6 col-xl-3 d-flex bookcard">
    //         <div className="card">
    //             <img className="card-img-top img-fluid book-card-img" src={book.img} alt={book.name} />
    //             <div className="card-body">
    //                 {/* needs to be sequentially descending order */}
    //                 <h3 className="card-title">{book.name}</h3>
    //                 <ul>
    //                     <li className="card-text">{`Course: ${book.course}`}</li>
    //                     <li className="card-text">{`Condition: ${book.condition}`}</li>
    //                     <li className="card-text">{`Price: ${book.price}`}</li>
    //                     <li className="card-text">{`Seller's contact info: ${book.contact}`}</li>
    //                 </ul>
    //                 <Link to='/detail' state={{ book: book }}>More Details</Link>
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <div className='bookcard col col-12 col-md-6 col-xl-3 d-flex'>
            <Card >
                <Card.Img className="card-img-top book-card-img" src={book.img} alt={book.name} />
                <Card.Body>
                    <Card.Title className='cardTitle'>{book.name}</Card.Title>
                    <div className='cardtext'>
                        <ul>
                            <li className="card-text">{`Course: ${book.course}`}</li>
                            <li className="card-text">{`Condition: ${book.condition}`}</li>
                            <li className="card-text">{`Price: ${book.price}`}</li>
                            <li className="card-text">{`Seller's contact info: ${book.contact}`}</li>
                        </ul>
                        <Link to='/detail' state={{ book: book }}>More Details</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}