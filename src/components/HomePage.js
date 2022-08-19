import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { SearchForm } from './SearchForm';
import { BookGrid } from './BookGrid';

import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';


export default function HomePage(props) {

    const navigateTo = useNavigate();
    const auth = getAuth();

    if (!auth.currentUser) {
        console.log('NOT ALLOWED');
        navigateTo('/signin');
    }

    console.log('SUCCESS');
    console.log(auth.currentUser);

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
            <SearchForm allBooks={books} setBooks={setBooks} />
            <BookGrid books={books} setBooks={setBooks} />
        </>
    );
}