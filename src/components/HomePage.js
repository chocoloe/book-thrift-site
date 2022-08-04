import React, { useState } from 'react';
import NavBar from './NavBar';
import { SearchForm } from './SearchForm';
import { BookGrid } from './BookGrid';

export default function HomePage(props) {
    const [books, setBooks] = useState(props.books);
    return (
        <>
            <NavBar books={books} setBooks={setBooks} />
            <SearchForm allBooks={props.books} setBooks={setBooks} />
            <BookGrid books={books} setBooks={setBooks} />
        </>
    );
}