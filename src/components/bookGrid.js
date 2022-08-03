import { React } from 'react';
import { Link } from 'react-router-dom';

export function BookCard({ book }) {
    return(
        <div className="card">
            <img className="card-img-top card-c" src={book.img} alt={book.name} />
            <div className="card-body">
              <h3 className="card-title">{book.name}</h3>
              <ul>
                <li className="card-text">{`Course: ${book.course}`}</li>
                <li className="card-text">{`Condition: ${book.condition}`}</li>
                <li className="card-text">{`Price: ${book.price}`}</li>
                <li className="card-text">{`Seller's contact info: ${book.contact}`}</li>
              </ul>
            </div>
            <Link to='/detail' state={{ book: book }}>More Details</Link>
        </div>
    );
}

export function BookGrid({ books }) {
    let bookArray = books.map(book => <BookCard key={book.name} book={book} />)
    return (
        <>
        { bookArray }
        </>
    );
}