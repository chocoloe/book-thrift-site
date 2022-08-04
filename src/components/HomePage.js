import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { SearchForm } from './SearchForm';
import { BookGrid } from './BookGrid';

import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';

export default function HomePage(props) {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const bookRef = ref(db, 'Books');
        onValue(bookRef, (snapshot) => {
            const data = snapshot.val();
            setBooks(Object.values(data));
        });
    }, []);

    return (
        <>
            <NavBar books={books} setBooks={setBooks} />
            <SearchForm allBooks={props.books} setBooks={setBooks} />
            <BookGrid books={books} setBooks={setBooks} />
        </>
    );
}